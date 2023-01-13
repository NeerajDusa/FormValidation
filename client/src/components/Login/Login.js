import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = () => {
  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [isFormValid, setIsFormValid] = React.useState(false);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  }

  const descriptionChangeHandler = (e) => {
    setDesc(e.target.value)
  }

  const checkIsFormValid = () => {
      var regex = /^[a-zA-Z]*$/;
      const isNameValid = name.length < 10 && name.length > 0 && regex.test(name);
      const isDescValid = desc.length < 1000 && desc.length > 0;
      setIsFormValid(isNameValid && isDescValid);
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    let details = {
      name,
      description: desc,
    };
    let response = await fetch("https://form-backend.onrender.com/api/form/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    let result = await response.json();
    alert("Successfully Sent!"); 
  }

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control}`}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={nameChangeHandler}
            onBlur={checkIsFormValid}
          />
        </div>
        <div
          className={`${classes.control}`}
        >
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={desc}
            onChange={descriptionChangeHandler}
            onBlur={checkIsFormValid}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!isFormValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
