import { Link } from "react-router-dom"
import PfofileImage from '../assets/a8.jpg'
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";


export default function UserProfile() {

  const [profileImage, setProfileImage] = useState('');

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [currentPassword, setCurrentPassword] = useState()
  const [newPassword, setNewPassword] = useState()
  const [confirmNewPassword, setConfirmNewPassword] = useState()

  
  return (
    <section className='profile'>
      <div className="container profile-container">
        <Link to={'/myposts/id'}> Meus Posts </Link>



        <div className="profile-details form-container">
          <div className="profile-wrapper">
            <div className="profile-image">
              <img src={PfofileImage} alt="" />
            </div>

            <form className="profile-image-form">
              <input type="file" name='profile-image' id='profile-image' accept='png, jpg, jpeg' onChange={e => setProfileImage(e.target.files[0])}/>
            </form>
            <button className="profile-image-button">
            <FaCheckCircle />
            </button>
          </div>

          <h2>Alunos ICEV</h2>


          <form action="" className='form profile-data-form'>

          <input type="text" placeholder='Nome' name='name' value={name} onChange={e => setName(e.target.value)}/>
          <input type="email" placeholder='Email' name='email' value={email} onChange={e => setEmail(e.target.value)}/>
          <input type="password" placeholder='Senha atual' name='currentPassword' value={currentPassword} onChange={e => setCurrentPassword(e.target.value)}/>
          <input type="password" placeholder='Nova senha' name='newPassword' value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
          <input type="password" placeholder='Confirmar senha' name='confirmPassword' value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)}/>

          <button type="submit" className="btn btn-primary">Atualizar Perfil</button>
        </form>

        </div>
      </div>
    </section>
  )
}
