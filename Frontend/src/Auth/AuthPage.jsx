import { motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import loginVideo from "../assets/Images/login/loginVideo.mp4";
import "./Login.css";
import Login from "./Login";
import Register from "./Register";
import ForgetPassword from "./ForgetPassword";
import { IoMdArrowRoundBack } from "react-icons/io";

const AuthPage = () => {
  const location = useLocation();
  const isLogin = location.pathname === "/auth/login";

  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row login-card shadow-lg rounded-4 overflow-hidden position-relative">
          <motion.div
            layout
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="d-flex w-100"
            style={{
              flexDirection: isLogin ? "row" : "row-reverse",
            }}
          >
            {/* IMAGE SIDE */}
            <motion.div
              layout
              initial={{ x: isLogin ? -200 : 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              style={{ zIndex: "1000" }}
              className="col-md-6 image-section d-flex align-items-center justify-content-center"
            >
              <div className="video-box">
                <video
                  src={loginVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="video-fluid"
                />
              </div>
            </motion.div>

            {/* FORM SIDE */}
            <motion.div
              layout
              initial={{ x: isLogin ? 200 : -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="col-md-6 form-section"
            >
              <h3 className="fw-bold text-center pt-4 LogoText">
                Stitch <span>&</span> Stone
              </h3>

              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/forgetPassword" element={<ForgetPassword />} />
              </Routes>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
