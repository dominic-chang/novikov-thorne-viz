#define M_PI radians(180.)
#define D1MACH1 1.175494351e-38
#define D1MACH2 3.402823466e+38
#define D1MACH3 1e-7

uniform sampler2D texture1;
uniform sampler2D textureft;
uniform vec2 uResolution;
uniform float theta;
uniform float hor_rot;
uniform float vert_rot;
uniform float disk_temperature;
uniform float view_angle;
uniform float disk_size;
uniform bool enable_grav_lensing;
uniform bool enable_doppler_beaming;
uniform bool enable_doppler_shift;
uniform bool enable_gravitational_redshift;
uniform bool enable_background;
varying vec2 vUv;

/* Complex Functions */
vec2 c_p(vec2 x, vec2 y){
    // Complex sum
    return vec2(x[0]+y[0], x[1]+y[1]);
}

vec2 c_m(vec2 x, vec2 y){
    // Complex multiplication 
    return vec2(x[0]*y[0] - x[1]*y[1] , x[0]*y[1] + x[1]*y[0]);
}

vec2 c_d(vec2 x, vec2 y){
    // Complex difference 
    return c_m(x, vec2(y[0], -y[1]))/(pow(y[0], 2.)+pow(y[1],2.));
}

vec2 c_pow(vec2 x, float y){
    // Complex power
    float mag = pow(sqrt(x[0]*x[0] + x[1]*x[1]), y);
    float angle = y*(atan(x[1],x[0]));
    return vec2(mag*cos(angle), mag*sin(angle));
}

/* Elliptic Functions */
float DRF(float X, float Y, float Z){

    float ERRTOL = pow(4.0*D1MACH3, 1.0/6.0);
    float LOLIM  = 5.0 * D1MACH1;
    float UPLIM  = D1MACH2/5.0;
    float C1 = 1.0/24.0;
    float C2 = 3.0/44.0;
    float C3 = 1.0/14.0;

    float ans = 0.0;
    if(min(min(X,Y),Z) < 0.0) {
        return ans;
    }

    if(max(max(X,Y),Z) > UPLIM){
        return ans;
    }

    if(min(min(X+Y,X+Z),Y+Z) < LOLIM){
        return ans;
    }

    float XN = X;
    float YN = Y;
    float ZN = Z;
    float MU = 0.;
    float XNDEV = 0.;
    float YNDEV = 0.;
    float ZNDEV = 0.;

    while(true){
        MU = (XN+YN+ZN)/3.0;
        XNDEV = 2.0 - (MU+XN)/MU;
        YNDEV = 2.0 - (MU+YN)/MU;
        ZNDEV = 2.0 - (MU+ZN)/MU;
        float EPSLON = max(max(abs(XNDEV),abs(YNDEV)),abs(ZNDEV));
        if(EPSLON < ERRTOL){break;}
        float XNROOT = sqrt(XN);
        float YNROOT = sqrt(YN);
        float ZNROOT = sqrt(ZN);
        float LAMDA = XNROOT*(YNROOT+ZNROOT) + YNROOT*ZNROOT;
        XN = (XN+LAMDA)*0.250;
        YN = (YN+LAMDA)*0.250;
        ZN = (ZN+LAMDA)*0.250;
    }

    float E2 = XNDEV*YNDEV - ZNDEV*ZNDEV;
    float E3 = XNDEV*YNDEV*ZNDEV;
    float S  = 1.0 + (C1*E2-0.10-C2*E3)*E2 + C3*E3;
    ans = S/sqrt(MU);

    return ans;
}

float rawF(float sinphi, float m){
    float sinphi2 = pow(sinphi, 2.0);
    float drf = DRF(1. - sinphi2, 1. - m*sinphi2, 1.);
    return sinphi*drf;
}

float K(float m){ 
    // Complete Elliptic integral of the first kind
    return DRF(0., 1. - m, 1.);
}

float F(float phi, float m){
    // Incomplete Elliptic integral of the first kind
    if(abs(phi) > M_PI/2.0){
        // Abramowitz & Stegun (17.4.3)
        float phi2 = phi + M_PI/2.0;
        float angle = (phi2/M_PI);
        return 2.0*floor(phi2 / M_PI)*K(m) - rawF(cos((angle - floor(angle))*M_PI), m);
    }
    return rawF(sin(phi), m);
}

float am(float u, float m, float tol){
    // Jacobi amplitude function

    float ambuf[10];
    if(u == 0.){return 0.;}

    float sqrt_tol = sqrt(tol);
    if(m < sqrt_tol){
        // A&S 16.13.4
        return u - 0.25*m*(u - 0.5*sin(2.0*u));
    }
    float m1 = 1. - m;
    if(m1 < sqrt_tol){
        // A&S 16.15.4
        float t = tanh(u);
        return asin(t) + 0.25*m1*(t - u*(1. - pow(t, 2.)))*cosh(u);
    }

    float a = 1.;
    float b = sqrt(m1);
    float c = sqrt(m);
    int n = 0;
    while(abs(c) > tol){
        if(n>=10){ return 0.0;}
        float atemp = 0.5*(a+b);
        float btemp = sqrt(a*b); 
        float ctemp = 0.5*(a-b);
        a = atemp;
        b = btemp;
        c = ctemp;
        ambuf[n] = c/a;
        n = n + 1;
    }

    float phi = a*u*pow(2.,float(n));
    for(int i = n-1; i >= 0; i--){
        phi = 0.5*(phi + asin(ambuf[i]*sin(phi)));
    }
    return phi;
}

float sn(float u, float m){
    // Jacobi elliptic sine function
    bool lt0 = m < 0.;
    bool gt1 = m > 1.;
    if (!(lt0) && !(gt1)){
        float phi = am(u, m, D1MACH3*2.);
        return sin(phi);
    } else if(lt0) {
        float mu1 = 1.0/(1.-m);
        float mu = -m*mu1;
        float sqrtmu1 = sqrt(mu1);
        float v = u/sqrtmu1;
        float phi = am(v, mu, D1MACH3*2.);

        float s = sin(phi);

        return sqrtmu1*s/sqrt(1.-mu*pow(s,2.));

    } else {
        float mu = 1. / m;
        float v = u * sqrt(m);
        float phi = am(v, mu, D1MACH3*2.);

        return sqrt(mu)*sin(phi);
    }
}

float cn(float u, float m){
    // Jacobi elliptic cosine function
    bool lt0 = m < 0.;
    bool gt1 = m > 1.;
    if (!(lt0) && !(gt1)){
        float phi = am(u, m, D1MACH3*2.);
        return cos(phi);
    } else if(lt0) {
        float mu1 = 1.0/(1.-m);
        float mu = -m*mu1;
        float sqrtmu1 = sqrt(mu1);
        float v = u/sqrtmu1;
        float phi = am(v, mu, D1MACH3*2.);

        float s = sin(phi);

        return cos(phi)/sqrt(1.-mu*pow(s,2.));

    } else {
        float mu = 1. / m;
        float v = u * sqrt(m);
        float phi = am(v, mu, D1MACH3*2.);

        return sqrt(1.- mu*pow(sin(phi),2.));
    }
}

float rs_flat(float mag, float psi) {
    return mag*sqrt(1.0+pow(tan(psi-M_PI/2.0),2.0));
}

float Fo(float mag, vec2 rad_roots[3]){
    vec2 v1 = rad_roots[0];
    vec2 v3 = rad_roots[1];
    vec2 v4 = rad_roots[2];
    vec2 v32 = v3;
    vec2 v21 = -v1;
    vec2 v41 = v4 - v1;
    vec2 v31 = v3 - v1;
    vec2 v42 = v4;

    float A = pow(c_m(v32, v42)[0], 0.5);
    float B = pow(c_m(v31, v41)[0], 0.5);
    
    float fo = 0.0;
    if(mag*mag < 27.){
        float ellk = (pow(A + B, 2.) - pow(v1[0], 2.)) / (4.*A*B);
         return F(acos((A-B)/(A+B)), ellk) ;
    } else {
        float ellk = v32[0]*v41[0] / (v31[0]*v42[0]);
        return F(asin(sqrt(v31[0]/v41[0])), ellk);
    }
}



void roots_schwarzschild(inout vec2 rad_roots[3], float mag){
    vec2 q = vec2(2.*mag*mag, 0.);
    vec2 p = vec2(-mag*mag, 0.);
    vec2 C1 = c_pow(-q/2. + c_pow(c_pow(q, 2.)/4. + c_pow(p, 3.)/27., 1./2.), 1./3.);
    vec2 C2 = c_m(C1, vec2(-1./2., sqrt(3.)/2.));
    vec2 C3 = c_m(C1, vec2(-1./2., -sqrt(3.)/2.));
    vec2 v1 = C2 - c_d(p, 3.*C2);
    vec2 v3 = C3 - c_d(p, 3.*C3);
    vec2 v4 = C1 - c_d(p, 3.*C1);
    rad_roots[0] = v1;
    rad_roots[1] = v3;
    rad_roots[2] = v4;
    return;
}

float rs_schwarzschild(float mag, float psi, float fo, vec2 rad_roots[3]){
    vec2 v1 = rad_roots[0];
    vec2 v3 = rad_roots[1];
    vec2 v4 = rad_roots[2];

    vec2 v32 = v3;
    vec2 v21 = -v1;
    vec2 v41 = v4 - v1;
    vec2 v31 = v3 - v1;
    vec2 v42 = v4;

    float A = pow(c_m(v32, v42)[0], 0.5);
    float B = pow(c_m(v31, v41)[0], 0.5);
    
    
    float arg = sqrt(A*B)*(psi)/mag;
    if(mag*mag < 27.){
        float ellk = (pow(A + B, 2.) - pow(v1[0], 2.)) / (4.*A*B);
        if(arg < fo ){
            float can = cn(fo - arg, ellk);
            float num = -A*v1[0] + (A*v1[0])*can;
            float den = -A + B + (A+B)*can;
            return num/den;
        } else {return 0.0;}
    } else {

        float ellk = v32[0]*v41[0] / (v31[0]*v42[0]);
        if(arg < 4.*fo ){
            float san = v41[0]*pow(sn(fo - sqrt(v31[0]*v42[0])*psi/(2.*mag), ellk), 2.0);
            float num = v31[0]*v4[0]-v3[0]*san;
            float den = v31[0]-san;
            return num/den;
        } else {return 0.0;}
    }
}

float psi_max(float mag, float fo, vec2 roots[3]){
    vec2 v1 = roots[0];
    vec2 v3 = roots[1];
    vec2 v4 = roots[2];

    vec2 v32 = v3;
    vec2 v21 = -v1;
    vec2 v41 = v4 - v1;
    vec2 v31 = v3 - v1;
    vec2 v42 = v4;
    
    float ellk = v32[0]*v41[0] / (v31[0]*v42[0]);
    return 4.*mag*fo/sqrt(v31[0]*v42[0]);
}

/* Disk Spectrum */

float calculateXC(float T) {
  if (T >= 1667.0 && T <= 4000.0) {
      return (
          -0.2661239 * (1e9 / pow(T, 3.0)) -
          0.2343589 * (1e6 / pow(T, 2.0)) +
          0.8776956 * (1e3 / T) +
          0.179910
      );
  } else if (T > 4000.0 && T <= 25000.0) {
      return (
          -3.0258469 * (1e9 / pow(T, 3.0)) +
          2.1070379 * (1e6 / pow(T, 2.0)) +
          0.2226347 * (1e3 / T) +
          0.240390
      );
  } else {
    return 0.0;
  }
}

float calculateYC(float T, float x_c) {
  if (T >= 1667.0 && T <= 2222.0) {
      return (
          -1.1063814 * pow(x_c, 3.0) -
          1.34811020 * pow(x_c, 2.0) +
          2.1855583 * x_c -
          0.20219683
      );
  } else if (T > 2222.0 && T <= 4000.0) {
      return (
          -0.9549476 * pow(x_c, 3.0) -
          1.37418593 * pow(x_c, 2.0) +
          2.09137015 * x_c -
          0.16748867
      );
  } else if (T > 4000.0 && T <= 25000.0) {
      return (
          3.0817580 * pow(x_c, 3.0) -
          5.87338670 * pow(x_c, 2.0) +
          3.75112997 * x_c -
          0.37001483
      );
  } else {
    return 0.0;
  }
}

vec3 xyzTorgb(float x, float y, float z) {/*https://en.wikipedia.org/wiki/CIE_1931_color_space*/
  vec3 c = vec3(0.0, 0.0, 0.0);
  //c[0] = 0.41847*x  - 0.15866*y - 0.082835*z;
  //c[1] = (-0.091169)*x  + 0.0025243*y + 0.015708*z;
  //c[2] = 0.00092090*x - 0.0025498*y +0.17860*z;
  c[0] = 3.24066*x - 1.53772*y - 0.4986*z;
  c[1]= -0.9689*x + 1.8758*y + 0.0415*z;
  c[2] = 0.0557*x -0.2040*y +1.0570*z;

  for(int i = 0; i < 3; i++ ) {
    float el = c[i];
    if(el <= 0.0031308) { 
      c[i] = 12.92*el;
    } else {
      c[i] =  1.055*pow(el,1.0/2.4)-0.55;
    }
  }
  return c;
}

vec4 plankian(float T) {
  float x_c = calculateXC(T);
  float y_c = calculateYC(T, x_c);
  // Calculate XYZ values
  float z_c = 1.0 - x_c - y_c;
  float Y = 1.0; // Assume luminance Y is 1.0
  float X = (Y / y_c) * x_c;
  float Z = (Y / y_c) * z_c;
  return vec4(xyzTorgb(X, Y, Z).xyz, 1.0);

}

float redshift(float rs){
    return sqrt(1.0 - 2.0/rs);
}

float doppler_shift(float rs, float cphi){
    // ToDo: Check this with ZAMO & Fluid fram transformation
    return sqrt(1.0 - 1.0/(rs - 2.0))/(1.0 + sqrt(1.0/(rs - 2.0))*cphi);
}

vec4 get_disk_color(float rs, float cphi, float sigma){
    float x = rs;
    float emission_profile = exp(-pow((x-3.0)/sigma,2.0))/(sigma*pow(2.0*M_PI,0.5));
    float arg = disk_temperature;
    if(enable_doppler_shift){
        arg *= doppler_shift(x, cphi);
    }
    if (enable_doppler_beaming){
        emission_profile *= pow(((1.0-1.0/(x-2.0)))/(1.0+sqrt(1.0/(x-2.0))*cphi),3.0);
    }

    if (enable_gravitational_redshift){
        emission_profile *= pow(redshift(x), 3.0);
        arg *= redshift(x);
    }

    vec4 color = plankian(arg);
    return color*3.0*emission_profile;
}

float gu_tt(float rs){
    if (enable_grav_lensing){
        return 1.0/sqrt(1.0 - 2.0/rs);
    } else {
        return 1.0;
    }
}

void main() {
    float scale = disk_size; // size of disk
    float scale2 = 125.;//size of horizon
    vec2 uv = scale2 * ((gl_FragCoord.xy ) / uResolution.x - vec2(0.5 ,0.5*uResolution.y/uResolution.x)); 
    float x = uv.x;
    float y = uv.y;
    float mag = length(uv);
    vec2 rad_roots[3];
    roots_schwarzschild(rad_roots, mag);
    float fo = Fo(mag, rad_roots);
    float cosvarphi = x/mag;
    float costheta = cos(vert_rot+0.499*M_PI);
    float sintheta = sin(vert_rot+0.499*M_PI);
    float sinvarphi = sign(costheta)*y/mag;
    float tanvarphi = sinvarphi/abs(cosvarphi);

    float pd_phi = -x*sintheta/1.2;
    float pd_theta = -y/1.2;// Division by 1.2 is a hack to remove weird precission issue on some machines

    float psi = acos(-((sintheta*tanvarphi) / 
        (pow(pow(costheta,2.0) + pow(tanvarphi,2.0), .5))));

    float rs = 0.0;
    float rs1 = 0.0;
    float rs2 = 0.0;

    float phi = M_PI/2.*(1.+sign(costheta)) + M_PI*(1.-sign(y)) + sign(y)*acos(costheta*cosvarphi/sqrt(1.0-pow(sintheta*cosvarphi, 2.0)));
    float phi2 = phi + M_PI;

    float deltapsi = 0.0;
    float shadowsize2 = 4.0;
    if (enable_grav_lensing){
        rs = rs_schwarzschild(mag, psi, fo, rad_roots);
        rs1 = rs_schwarzschild(mag, M_PI+ psi, fo, rad_roots);
        rs2 = rs_schwarzschild(mag, 2.0*M_PI+ psi, fo, rad_roots);
        deltapsi = psi_max(mag, fo, rad_roots) - M_PI;
        shadowsize2 = 27.0;
    } else {
        rs = rs_flat(mag, psi);
    }


    float rad_view_angle = vert_rot - 0.499*M_PI;
    //latitude and longitude of origin
    vec2 origin = vec2(-hor_rot, vert_rot);
    //vec2 origin = vec2(0.0, -M_PI/2.0);
    float fov = 0.45;

    vec2 screencrd = (gl_FragCoord.xy/uResolution.x - vec2(0.5 ,0.5*uResolution.y/uResolution.x))*vec2(M_PI, M_PI)*vec2(fov,fov);
    float screenrad = length(screencrd);
    float _lensedscreenrad = screenrad-deltapsi;
    vec2 lensedscreencrd = _lensedscreenrad*screencrd.xy/(screenrad);
    float lensedscreenrad = length(lensedscreencrd);
    float sinlensedscreenrad = sin(lensedscreenrad);
    float coslensedscreenrad = cos(lensedscreenrad);
    float lensedx = lensedscreencrd[0];
    float lensedy = lensedscreencrd[1];

    float lat = asin(coslensedscreenrad* sin(origin[1]) + (lensedy * sinlensedscreenrad * cos(origin[1])) / lensedscreenrad);
    float lon = origin[0] + atan(lensedx*sinlensedscreenrad, lensedscreenrad*coslensedscreenrad*cos(origin[1]) - lensedy*sinlensedscreenrad*sin(origin[1]));
    if(lon > M_PI){
        lon = 2.0*M_PI-lon;
    }
    if(lon < -M_PI){
        lon = 2.0*M_PI+lon;
    }
    vec2 texcrd = vec2((lon / M_PI + 1.) * 0.5, (lat / (M_PI/2.0) + 1.) * 0.5);

    if (mag*mag > shadowsize2){
        if(enable_background){
            gl_FragColor = texture2D(textureft, texcrd);
        }
    } else {
        rs = rs_schwarzschild(mag, psi, fo, rad_roots);
        rs1 = rs_schwarzschild(mag, M_PI + psi, fo, rad_roots);
        rs2 = rs_schwarzschild(mag, 2.0*M_PI + psi, fo, rad_roots);
        gl_FragColor = vec4(0., 0., 0., 1.);
    }

    if(rs < 2.0){
        gl_FragColor = vec4(0., 0., 0., 1.);
        return;
    }
    
    
    if (rs2 > 6.0 && enable_grav_lensing){
        // + 2PI Because each n views the other side of the disk
        vec2 uv4 = rs2*vec2(cos(phi+2.0*M_PI),sin(phi+2.0*M_PI))/(3.0*scale);
        float theta2 = 10.0*(1.0+1.0/(pow(rs2,3.0) + 2.0*pow(rs2,2.0)))*theta+rs2/10.0;
        uv4 = vec2(cos(theta2)*uv4.x + sin(theta2)*uv4.y, cos(theta2)*uv4.y - sin(theta2)*uv4.x)  + vec2(0.5, 0.5) ;

        float rs2_square = rs2*rs2;
        float gu_tt1 = gu_tt(rs2);
        // Accretion disk is in the equatorial plane
        float dpomega = (pd_theta*pd_theta+pd_phi*pd_phi)/rs2_square;
        float pu_rr = sqrt((gu_tt1-dpomega)/(gu_tt1));
        float pmag = sqrt(gu_tt1*pu_rr*pu_rr + dpomega);
        float pu_phi = pd_phi;
        float cphi = pu_phi/(pmag*rs1);

        vec4 temp = 1.2*scale*texture2D(texture1, uv4)*get_disk_color(rs2, cphi, scale);
        gl_FragColor.xyz *= abs(1.0-length(temp.rgb));

        gl_FragColor += temp;

    }
    if (rs1 > 6.0 && enable_grav_lensing){
        // + PI Because each n views the other side of the disk
        vec2 uv3 = rs1*vec2(cos(phi+M_PI),sin(phi+M_PI))/(3.0*scale);
        float theta2 = 10.0*(1.0+1.0/(pow(rs1,3.0) + 2.0*pow(rs1,2.0)))*theta+rs1/10.0;
        uv3 = vec2(cos(theta2)*uv3.x + sin(theta2)*uv3.y, cos(theta2)*uv3.y - sin(theta2)*uv3.x)  + vec2(0.5, 0.5) ;

        float rs1_square = rs1*rs1;
        float gu_tt1 = gu_tt(rs1);
        // Accretion disk is in the equatorial plane
        float dpomega = (pd_theta*pd_theta+pd_phi*pd_phi)/rs1_square;
        float pu_rr = sqrt((gu_tt1-dpomega)/(gu_tt1));
        float pmag = sqrt(gu_tt1*pu_rr*pu_rr + dpomega);
        float pu_phi = pd_phi;
        float cphi = pu_phi/(pmag*rs1);

        vec4 temp = 1.2*scale*texture2D(texture1, uv3)*get_disk_color(rs1, cphi, scale);
        gl_FragColor.xyz *= abs(1.0-length(temp.rgb));

        gl_FragColor += temp;

    }
    if (rs > 6.0) {
        vec2 uv2 = rs*vec2(cos(phi),sin(phi))/(3.0*scale);
        // The rs/10.0 is a hack to make the disk look more spirally
        float theta2 = 10.0*(1.0+1.0/(pow(rs,3.0) + 2.0*pow(rs,2.0)))*theta+rs/10.0;
        uv2 = vec2(cos(theta2)*uv2.x + sin(theta2)*uv2.y, cos(theta2)*uv2.y - sin(theta2)*uv2.x)  + vec2(0.5, 0.5) ;

        float rs_square = rs*rs;
        float gu_tt1 = gu_tt(rs);
        // Accretion disk is in the equatorial plane
        float dpomega = (pd_theta*pd_theta+pd_phi*pd_phi)/rs_square;
        float pu_rr = sqrt((gu_tt1-dpomega)/(gu_tt1));
        float pmag = sqrt(gu_tt1*pu_rr*pu_rr + dpomega);
        float pu_phi = pd_phi;
        float cphi = pu_phi/(pmag*rs);

        vec4 temp = 1.2*scale*texture2D(texture1, uv2)*get_disk_color(rs, cphi, scale);
        gl_FragColor.xyz *= abs(1.0-length(temp.rgb));
        gl_FragColor += temp;

    }

    gl_FragColor = pow(gl_FragColor.rgba, vec4(1.5));
        
}