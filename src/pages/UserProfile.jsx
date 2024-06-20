import { Link } from "react-router-dom"
import PfofileImage from '../assets/icev.jpg'
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";


export default function UserProfile() {

  const [profileImage, setProfileImage] = useState('');

  
  return (
    <section className='profile'>
      <div className="container profile-container">
        <Link to={'/myposts/id'}>Posts</Link>



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

          
          <p className="btn btn-sm btn-primary">Nós somos um grupo de alunos da faculdade ICEV-Instituto de Ensino Superior, esse site é parte do nosso projeto de extensão, o qual visa a prática de suporte psicológico para famílias de pessoas com autismo, fornecendo as informações necessárias para o público alvo.</p>


         

        </div>
      </div>
    </section>
  )
}
