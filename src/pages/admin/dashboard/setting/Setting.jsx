import Sidebar from "../../../../components/Sidebar/adminSidebar/Sidebar";
import "./setting.css";
import { Link } from "react-router-dom";

export default function Setting() {
  return (
    <div>
      <Sidebar>
        <div>
          <div className="row">
            <div className="col-md-12">
              {/* <div className="overview">
                <p>Setting</p>
              </div> */}
                <div className=" overview " >
                 <div className="settingDiv1">
                    <p className="personal">Personal Information</p>
                <div className="settingDiv2">
                    <div>
                        <img src="/web/1.png" alt="" />
                    </div>

                    <div>
                        <button className="Editbtn"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g clip-path="url(#clip0_174_16188)">
    <path d="M16.6363 12.5074C16.4898 12.6363 16.3441 12.766 16.1992 12.8961C17.3031 13.8004 18.307 14.8043 19.2109 15.9078C19.341 15.7629 19.4707 15.6176 19.5996 15.4707C20.0105 14.9945 20.1535 14.0434 19.7961 13.5043C19.4727 13.0305 19.0762 12.634 18.6027 12.311C18.0633 11.9535 17.1125 12.0965 16.6359 12.5074H16.6363Z" fill="#F3F3F3"/>
    <path d="M12.6272 19.9981C13.3979 19.9434 14.2397 19.8629 15.0796 19.8055C15.2432 19.7942 15.3925 19.7371 15.494 19.6449C16.5784 18.6614 17.6116 17.6414 18.6057 16.5711C17.6518 15.4789 16.6288 14.4559 15.5362 13.5016C14.4659 14.4957 13.446 15.5289 12.4624 16.6133C12.3706 16.7149 12.3132 16.8637 12.3018 17.0278C12.2444 17.8676 12.1635 18.7094 12.1092 19.4801C12.0846 19.7953 12.3116 20.0223 12.6268 19.9977L12.6272 19.9981Z" fill="#F3F3F3"/>
    <path d="M12.2401 8.90019C13.2831 8.79746 14.0453 7.86864 13.9426 6.82562C13.8399 5.7826 12.9111 5.02034 11.868 5.12307C10.825 5.2258 10.0628 6.15462 10.1655 7.19764C10.2682 8.24066 11.197 9.00292 12.2401 8.90019Z" fill="#F3F3F3"/>
    <path d="M0.352344 13.6977C0.712891 15.7395 2.52461 17.5508 4.56641 17.9117L4.57383 17.9129C5.98281 18.1473 7.47344 18.2621 9.1332 18.2637C9.81992 18.2629 10.4781 18.2426 11.1137 18.2023C11.1477 17.7918 11.1824 17.3695 11.2109 16.952C11.2395 16.5422 11.3961 16.1609 11.6523 15.8789C12.6531 14.7754 13.7094 13.7059 14.7918 12.7004L14.7953 12.6973L14.7988 12.6941L15.4621 12.0883L15.4652 12.0852L15.4688 12.082C15.5543 12.0051 15.6359 11.932 15.716 11.8613C15.4992 11.5523 15.2816 11.243 15.0625 10.932C14.307 9.86719 12.8805 9.83437 12.2008 10.8957C12.1223 11.0176 12.0438 11.1395 11.9645 11.2613C11.5098 11.9609 10.5434 11.959 10.0719 11.2516C9.20508 9.95273 8.34961 8.65273 7.54648 7.36211C6.88281 6.29336 5.53359 6.32227 4.78711 7.4043C3.74102 8.92773 2.66289 10.4434 1.61641 11.9344C1.5293 11.0523 1.48594 10.125 1.48477 9.13281C1.48672 7.5582 1.59453 6.14766 1.81484 4.82109C1.9375 4.13281 2.31523 3.44336 2.8793 2.8793C3.44336 2.31523 4.13281 1.93711 4.82148 1.81445C6.14805 1.59414 7.5582 1.48594 9.13164 1.48437C10.7059 1.48594 12.1164 1.59414 13.4434 1.81445C14.1316 1.93711 14.8211 2.31484 15.3852 2.87891C15.9492 3.44297 16.3273 4.13242 16.4496 4.8207C16.6699 6.14766 16.7781 7.5582 16.7797 9.13086C16.7789 9.86016 16.7551 10.5539 16.7078 11.2203C17.0578 11.0867 17.4438 11.0133 17.8297 11.0133C17.9586 11.0133 18.0848 11.0215 18.2074 11.0375C18.2445 10.425 18.2633 9.79141 18.2641 9.13086C18.2621 7.47305 18.1473 5.98203 17.9133 4.57344L17.9121 4.56602C17.5512 2.52422 15.7398 0.7125 13.698 0.351953L13.6906 0.350781C12.2812 0.116406 10.7906 0.00195312 9.13125 0C7.47266 0.00195312 5.98203 0.116797 4.57383 0.350781L4.56641 0.351953C2.52461 0.712891 0.712891 2.52461 0.352344 4.56641L0.351172 4.57383C0.116797 5.98203 0.00195312 7.47305 0 9.13281C0.00195312 10.7918 0.116797 12.2828 0.350781 13.6906L0.351953 13.698L0.352344 13.6977Z" fill="#F3F3F3"/>
  </g>
  <defs>
    <clipPath id="clip0_174_16188">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg> Edit Profile Picture</button>
                    </div>

                </div>
                <div className="settingDiv3">

                    <div>
                        <p className="settingLabel" htmlFor="name">Name</p>
                        <input type="text" placeholder="Boris Smith" id="name" className="inputSetting"/>
                    </div>

                    <div>
                        <p className="settingLabel" htmlFor="name">Phone Number</p>
                        <input type="text" placeholder="+1 495-862-0765" id="name" className="inputSetting"/>
                    </div>

                    <div>
                        <p className="settingLabel" htmlFor="name">Email</p>
                        <input type="text" className="inputSetting" placeholder="examlple@gmail.com" id="name" />
                    </div>
                </div>
                </div>  <br />

                  <div className="settingDiv1">
                    <p className="personal">Change Password</p>
            
                <div className="settingDiv4">

                    <div>
                        <p className="settingLabel" htmlFor="name">Password</p>
                        <input type="text" placeholder="**********" id="name" className="inputSetting2"/>
                    </div>

                    <div className="">
                       <p className="settingLabel" htmlFor="name">&nbsp;</p>
                        <button className="changeBtn">Change Password</button>
                    </div>

                </div>
                
                </div> 
                <br />
                 <div className="settingDiv1">
                    <p className="personal">Notification</p>

                  <div className="notifi">
                    <div>

                        <div className="alertSvg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_174_16225)">
    <path d="M7.32336 16C8.53076 16 9.54077 15.1393 9.77271 14H4.87402C5.10608 15.1393 6.11609 16 7.32336 16Z" fill="#F3F3F3"/>
    <path d="M11.998 7.99939C11.9953 7.99939 11.9926 8 11.9899 8C9.41728 8 7.32329 5.90662 7.32329 3.33337C7.32329 2.62598 7.48601 1.95728 7.76934 1.35596C7.62261 1.34204 7.47393 1.33337 7.32329 1.33337C4.74602 1.33337 2.65667 3.42261 2.65667 6V7.85864C2.65667 9.17798 2.07866 10.4233 1.06462 11.2806C0.726611 11.5693 0.576587 12.0293 0.697925 12.478C0.839282 13 1.35527 13.3334 1.89666 13.3334H12.7466C13.3146 13.3334 13.85 12.9653 13.9653 12.4087C14.0546 11.978 13.9013 11.548 13.5673 11.2673C12.5979 10.4547 12.0373 9.26062 11.998 7.99939Z" fill="#F3F3F3"/>
    <path d="M15.3229 3.33337C15.3229 5.17432 13.8306 6.66663 11.9895 6.66663C10.1486 6.66663 8.65625 5.17432 8.65625 3.33337C8.65625 1.49243 10.1486 0 11.9895 0C13.8306 0 15.3229 1.49243 15.3229 3.33337Z" fill="#F3F3F3"/>
  </g>
  <defs>
    <clipPath id="clip0_174_16225">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
                        </div>
                    </div>
                      <div>
                        <p className="settingLabel" htmlFor="name" style={{color:"black"}}>Enable Notification</p>
                        <p className="loremNotification" style={{marginBottom:"0px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet id neque sit amet pretium.</p>
                    </div>

                 <div className="form-check form-switch" style={{position:"absolute", right:"8%"}}>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                 </div>

                  </div>

                 
                
           

                  <div>
              
                  </div>
            
             
                
                </div> 

                <br />
                  <div className="settingDiv1">
                    <p className="personal">Accounts</p>

               <div style={{display:"flex", gap:"45px"}}>
                   <div className="notifi">
                    <div>

                        <div className="">
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <g clip-path="url(#clip0_174_21726)">
    <path d="M7.5 16C7.5 14.4146 7.93681 12.9294 8.69569 11.6577V6.26343H3.30144C1.1605 9.04393 0 12.4326 0 16C0 19.5674 1.1605 22.9561 3.30144 25.7366H8.69569V20.3423C7.93681 19.0706 7.5 17.5854 7.5 16Z" fill="#FBBD00"/>
    <path d="M16 24.5L12.25 28.25L16 32C19.5674 32 22.9561 30.8395 25.7366 28.6986V23.3101H20.3481C19.0652 24.0717 17.5738 24.5 16 24.5Z" fill="#0F9D58"/>
    <path d="M8.69503 20.3423L3.30078 25.7365C3.72466 26.287 4.18622 26.8142 4.68566 27.3137C7.70766 30.3357 11.7256 32 15.9993 32V24.5C12.8978 24.5 10.1795 22.83 8.69503 20.3423Z" fill="#31AA52"/>
    <path d="M32 16C32 15.0266 31.9119 14.0513 31.738 13.1015L31.5973 12.3328H16V19.8328H23.5907C22.8536 21.2991 21.7202 22.4954 20.348 23.3101L25.7365 28.6986C26.287 28.2748 26.8142 27.8132 27.3137 27.3138C30.3357 24.2917 32 20.2738 32 16Z" fill="#3C79E6"/>
    <path d="M22.0104 9.98956L22.6733 10.6524L27.9766 5.34919L27.3137 4.68631C24.2917 1.66431 20.2738 0 16 0L12.25 3.75L16 7.5C18.2704 7.5 20.4049 8.38412 22.0104 9.98956Z" fill="#CF2D48"/>
    <path d="M15.9994 7.5V0C11.7257 0 7.70772 1.66431 4.68566 4.68625C4.18622 5.18569 3.72466 5.71287 3.30078 6.26344L8.69503 11.6577C10.1796 9.17 12.8979 7.5 15.9994 7.5Z" fill="#EB4132"/>
  </g>
  <defs>
    <clipPath id="clip0_174_21726">
      <rect width="32" height="32" fill="white"/>
    </clipPath>
  </defs>
</svg>
                        </div>
                    </div>
                      <div style={{display:"flex", gap:"25px", alignItems:"center"}}>
                      <div>
                          <p className="settingLabel googleLogo" htmlFor="name" style={{color:"black"}}>Google</p>
                        <p className="loremNotification" style={{marginBottom:"0px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet id neque sit amet pretium.</p>
                      </div>

                          <div>
                   <button className="disConnectBtn">Disconnect</button>
                      </div>
                    </div>

                 <div className="form-check form-switch" style={{position:"absolute", right:"8%"}}>
                   {/* <button className="disConnectBtn">Disconnect</button> */}
                 </div>

                  </div>

                       <div className="notifi">
                    <div>

                        <div className="">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M12.9279 17.6639C12.8319 17.6639 10.7199 17.6639 9.75989 17.6639C9.24789 17.6639 9.08789 17.4719 9.08789 16.9919C9.08789 15.7119 9.08789 14.3999 9.08789 13.1199C9.08789 12.6079 9.27989 12.4479 9.75989 12.4479H12.9279C12.9279 12.3519 12.9279 10.4959 12.9279 9.63193C12.9279 8.35193 13.1519 7.13593 13.7919 6.01593C14.4639 4.86393 15.4239 4.09593 16.6399 3.64793C17.4399 3.35993 18.2399 3.23193 19.1039 3.23193H22.2399C22.6879 3.23193 22.8799 3.42393 22.8799 3.87193V7.51993C22.8799 7.96793 22.6879 8.15993 22.2399 8.15993C21.3759 8.15993 20.5119 8.15993 19.6479 8.19193C18.7839 8.19193 18.3359 8.60793 18.3359 9.50393C18.3039 10.4639 18.3359 11.3919 18.3359 12.3839H22.0479C22.5599 12.3839 22.7519 12.5759 22.7519 13.0879V16.9599C22.7519 17.4719 22.5919 17.6319 22.0479 17.6319C20.8959 17.6319 18.4319 17.6319 18.3359 17.6319V28.0639C18.3359 28.6079 18.1759 28.7999 17.5999 28.7999C16.2559 28.7999 14.9439 28.7999 13.5999 28.7999C13.1199 28.7999 12.9279 28.6079 12.9279 28.1279C12.9279 24.7679 12.9279 17.7599 12.9279 17.6639Z" fill="#2366E2"/>
</svg>
                        </div>
                    </div>
                      <div style={{display:"flex", gap:"25px", alignItems:"center"}}>
                       <div>
                         <p className="settingLabel googleLogo" htmlFor="name" style={{color:"black"}}>Facebook</p>
                        <p className="loremNotification" style={{marginBottom:"0px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet id neque sit amet pretium.</p>
                       </div>
                      <div>
                   <button className="disConnectBtn">Disconnect</button>
                      </div>
                    </div>

                 <div className="form-check form-switch" style={{position:"absolute", right:"8%"}}>
                   {/* <button className="disConnectBtn">Disconnect</button> */}
                 </div>

                  </div>
               </div>

                 
                
           

                  <div>
              
                  </div>
            
             
                
                </div> 
                
                 </div>
    
              
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
}
