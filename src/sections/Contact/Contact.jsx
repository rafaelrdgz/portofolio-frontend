import styles from "./ContactStyles.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    if (sent) {
      const message = document.getElementById("response");
      message.innerText = "You have already sent an email";
      message.style.color = "red";
    } else {
      setSent(true);
      axios.post("http://localhost:3000/contact", data).then((response) => {
        const message = document.getElementById("response");
        message.innerText = response
          ? "Email sent successfully"
          : "There was an error sending the email";
        message.style.color = response ? "green" : "red";

        setTimeout(() => {
          document.getElementById("response").innerText = "";
        }, 5000);
      });
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            {...register("name", {
              required: true,
              minLength: 3,
              maxLength: 50,
            })}
            aria-invalid={errors.name ? "true" : "false"}
            type="text"
            placeholder="Name"
          />
          {errors.name?.type === "required" && (
            <p style={{ color: "red", fontWeight: "bold" }} role="alert">
              Name is required
            </p>
          )}
          {errors.name?.type === "minLength" && (
            <p style={{ color: "red", fontWeight: "bold" }} role="alert">
              Name must be at least 3 characters
            </p>
          )}
          {errors.name?.type === "maxLength" && (
            <p style={{ color: "red", fontWeight: "bold" }} role="alert">
              Name must be at most 50 characters
            </p>
          )}
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            {...register("email", {
              required: true,
              pattern: /^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/,
            })}
            type="text"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p style={{ color: "red", fontWeight: "bold" }} role="alert">
              Email is required
            </p>
          )}
          {errors.email?.type === "pattern" && (
            <p style={{ color: "red", fontWeight: "bold" }} role="alert">
              Email is invalid
            </p>
          )}
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            placeholder="Message"
            {...register("message", {
              required: true,
              minLength: 10,
              maxLength: 1000,
            })}
          ></textarea>
          {errors.message?.type === "required" && (
            <p style={{ color: "red", fontWeight: "bold" }} role="alert">
              Message is required
            </p>
          )}
          {errors.message?.type === "minLength" && (
            <p style={{ color: "red", fontWeight: "bold" }} role="alert">
              Message must be at least 10 characters
            </p>
          )}
          {errors.message?.type === "maxLength" && (
            <p style={{ color: "red", fontWeight: "bold" }} role="alert">
              Message must be at most 1000 characters
            </p>
          )}
        </div>
        <input className="hover btn" type="submit" value="Submit" />
        <p id="response"></p>
      </form>
    </section>
  );
}

export default Contact;
