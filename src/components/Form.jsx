import React from 'react'
import style from './form.module.css'
const Form = () => {
  return (
    <div className={style.body}>
      <form >
        <input className={style.input} type="text" placeholder="username" />
        <input className={style.input} type="password" placeholder="password"/>
        <input className={style.button} type="submit" value="LOGIN"/>
        <p>Not registered? <span>Create an account</span></p>
    </form>
    </div>
  )
}

export default Form
