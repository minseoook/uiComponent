import React, { useState } from "react";
import Modal from "./Modal";
import useModal from "./useModal";
import styles from "./login.module.css";

const LoginModal = () => {
  const { open, openModal, closeModal } = useModal();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ username, password });
    setUsername("");
    setPassword("");
    closeModal();
  };

  return (
    <>
      <button onClick={openModal}>로그인</button>
      <Modal open={open} close={closeModal} outsideClick>
        <Modal.Header title="로그인" close={closeModal} />
        <Modal.Content>
          <form onSubmit={handleSubmit} className={styles.loginForm}>
            <div>
              <input
                type="text"
                placeholder="사용자 이름"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles.loginInput}
              />

              <input
                type="email"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.loginInput}
              />
              <input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.loginInput}
              />
            </div>

            <button type="submit" className={styles.loginButton}>
              로그인
            </button>
          </form>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default LoginModal;
