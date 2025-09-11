import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ViceMan from './assets/vice-man.jpg'
import ViceLady from './assets/vice-woman.jpg'
import HeadmistressPic from './assets/headmistress.jpg'
import Basketball from './assets/baskteball.jpg'
import Cafeteria from './assets/cafeteria.jpg'
import Library from './assets/library.jpg'
import Staff from './assets/white-man.jpg'
import './App.css';



function Mission() {
    return (
        <div className="mission">
            <h3>Our Mission</h3>
            <p>  Lorem ipsum dolor sit, amet consectetur adipisicing
             elit. Deleniti necessitatibus enim perspiciatis 
             exercitationem quo, hic sequi placeat, error 
             modi tenetur ex, architecto laboriosam laborum! 
             Deserunt aliquid praesentium ad qui dicta.
             Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ducimus ut harum nulla maiores dignissimos 
              quibusdam quod fugit rerum? Vero deserunt quis 
              iure necessitatibus corrupti earum voluptas culpa 
              recusandae saepe voluptatibus. Lorem ipsum dolor sit,
               amet consectetur adipisicing elit. Temporibus sed, 
               pariatur doloremque inventore perspiciatis assumenda
                nihil iste vel eaque similique et odio labore 
                nulla distinctio delectus deleniti repellat! Nulla, tempora?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Fugit magnam repellat id temporibus aut magni voluptatibus 
                dolorem earum corrupti! Quia a magnam earum veritatis dolor 
                magni facilis minima tempore porro.
            </p>
        </div>
    )
}
function Vision() {
    return(
        <div className="vision">
            <h3>Our Vision</h3>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Deleniti necessitatibus enim perspiciatis 
                exercitationem quo, hic sequi placeat, error 
                modi tenetur ex, architecto laboriosam laborum! 
                Deserunt aliquid praesentium ad qui dicta.
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ducimus ut harum nulla maiores dignissimos 
                quibusdam quod fugit rerum? Vero deserunt quis 
                iure necessitatibus corrupti earum voluptas culpa 
                recusandae saepe voluptatibus. Lorem ipsum dolor sit amet,
                 consectetur adipisicing elit. Corrupti, debitis harum ab 
                 eum, eos, provident optio qui in ratione ipsum fugiat? 
                 Laboriosam repellat esse vero placeat officiis voluptatem 
                 doloribus excepturi. Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Dignissimos eos veniam recusandae
                sunt quis excepturi asperiores nam veritatis, tenetur 
                laboriosam ab odit nobis nisi perspiciatis, assumenda, 
                maiores mollitia commodi praesentium!
            </p>
        </div>
    )
}

function History() {
    return(
        <div className="history">
            <h3>History</h3>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing
             elit. Deleniti necessitatibus enim perspiciatis 
             exercitationem quo, hic sequi placeat, error 
             modi tenetur ex, architecto laboriosam laborum! 
             Deserunt aliquid praesentium ad qui dicta.
             Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ducimus ut harum nulla maiores dignissimos 
              quibusdam quod fugit rerum? Vero deserunt quis 
              iure necessitatibus corrupti earum voluptas culpa 
              recusandae saepe voluptatibus.            Lorem ipsum dolor sit, amet consectetur adipisicing
             elit. Deleniti necessitatibus enim perspiciatis 
             exercitationem quo, hic sequi placeat, error 
             modi tenetur ex, architecto laboriosam laborum! 
             Deserunt aliquid praesentium ad qui dicta.
             Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ducimus ut harum nulla maiores dignissimos 
              quibusdam quod fugit rerum? Vero deserunt quis 
              iure necessitatibus corrupti earum voluptas culpa 
              recusandae saepe voluptatibus.</p>
        </div>
    )
}

function AsstHeadmaster() {
    return(
        <div className='asst'>
            <img src={HeadmistressPic} alt="" />
            <h4>Asst.Headmaster</h4>
            <h4>(Academics)</h4>
            <p className='admin-text'>Lorem ipsum dolor sit amet consectetur adipisicing
                 elit. Cupiditate maiores earum, magnam voluptate
                  laborum corrupti recusandae hic commodi libero 
                  minus sit dicta, ut in quibusdam placeat quam u
                  nde possimus amet?</p>

        </div>
    );
}

function AsstHeadmistress() {
    return(
        <div className='asst'>
            <img src={ViceLady} alt="" />
            <h4>Asst.Headmistress</h4>
            <h4>(Administration)</h4>
            <p className='admin-text'>Lorem ipsum dolor sit amet consectetur adipisicing
                 elit. Cupiditate maiores earum, magnam voluptate
                  laborum corrupti recusandae hic commodi libero 
                  minus sit dicta, ut in quibusdam placeat quam u
                  nde possimus amet?</p>
        </div>
    )
}

function Headmistress() {
    return(
        <div className='headmistress'>
            <img src={ViceMan} alt="" id='HeadmistressPic'/>
            <h4 className='head'>Headmistress</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing
                 elit. Cupiditate maiores earum, magnam voluptate
                  laborum corrupti recusandae hic commodi libero 
                  minus sit dicta, ut in quibusdam placeat quam u
                  nde possimus amet?</p>

        </div>
    )
}

function Teacher() {
    return(
        <div className='teacher'>
            <img src={Staff} alt="" id='teach-pic'/>
            <p>Teacher</p>
        </div>
    );
}

function TeacherOne() {
    return(
        <div className='teacher'>
            <img src={Staff} alt="" id='teach-pic'/>
            <p>Teacher</p>
        </div>
    );

}
function TeacherTwo() {
    return(
        <div className='teacher'>
            <img src={Staff} alt="" id='teach-pic'/>
            <p>Teacher</p>
        </div>
    );
}

function TeacherThree() {
    return(
        <div className='teacher'>
            <img src={Staff} alt="" id='teach-pic'/>
            <p>Teacher</p>
        </div>
    );
}

function TeacherFour() {
    return(
        <div className='teacher'>
            <img src={Staff} alt="" id='teach-pic'/>
            <p>Teacher</p>
        </div>
    );
}
function TeacherFive() {
    return(
        <div className='teacher'>
            <img src={Staff} alt="" id='teach-pic'/>
            <p>Teacher</p>
        </div>
    );
}

function TeacherSix() {
    return(
        <div className='teacher'>
            <img src={Staff} alt="" id='teach-pic'/>
            <p>Teacher</p>
        </div>
    );
}

function TeacherSeven() {
    return(
        <div className='teacher'>
            <img src={Staff} alt="" id='teach-pic'/>
            <p>Teacher</p>
        </div>
    );
}

function Both() {
    return(
        <div className='both'>
            <Mission/>
            <Vision/>
        </div>
    )
}

function Staffs() {
    return(
        <div className='staff'>
            <Teacher/>
            <TeacherOne/>
            <TeacherTwo/>
            <TeacherThree/>

        </div>
    );
}

function Staffs2() {
    return(
        <div className='staff'>
            <TeacherFour />
            <TeacherFive/>
            <TeacherSix/>
            <TeacherSeven />
        </div>
    )
}

function Admministration() {
    return(
        <div className='admin'>
            <AsstHeadmaster/>
            <Headmistress/>
            <AsstHeadmistress/>


        </div>
    )
}

function AdStaff() {
    return(
        <div className='admin-staff-combo'>
            <Admministration/>
            <h3 className='staff-head'>Staff</h3>
            <Staffs/>
            <Staffs2/>
        </div>
    )
}

function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev); 
  };

  const handleOptionClick = (option) => {
    console.log("Selected:", option);
    setIsOpen(false); // close dropdown after selection
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button onClick={toggleDropdown}>
        CURRENT ▾
      </button>

      {isOpen && (
        <ul style={{
          top: '100%',
          left: 0,
          backgroundColor: 'white',
          border: '1px solid #ccc',
          listStyle: 'none',
          fontFamily:'san-serif',
          borderBottomLeftRadius:'20px',
          borderBottomRightRadius:'20px',
          padding: '0',
          margin: '4px 0',
          minWidth: '100px',
          color:'green',
          zIndex: 1
        }}>
          <li onClick={() => handleOptionClick('Option 1')} style={{ padding: '8px', cursor: 'pointer' }}>LABORATORY</li>
          <li onClick={() => handleOptionClick('Option 2')} style={{ padding: '8px', cursor: 'pointer' }}>SPORTS</li>
          <li onClick={() => handleOptionClick('Option 3')} style={{ padding: '8px', cursor: 'pointer' }}>CLUBS</li>
        </ul>
      )}
    </div>
  );
}




function Ongoing() {
    return(
        <div className='ongoing'>
            <img src={Cafeteria} alt="" id='project-pic' />
            <img src={Library} alt=""  id='project-pic'/>
            <img src={Basketball} alt="" id='project-pic' />
            <DropdownButton/>
        </div>
    )
}

function OngoingText() {
    const navigate = useNavigate();

    // constant that takes you to the support page //
    const goToPage = () => {
        navigate('/support');
    }
    return(
        <div>
            <p className='ongoing-text'> 
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem necessitatibus cumque est ipsa, velit cupiditate 
                dignissimos error totam placeat architecto corporis labore 
                at perferendis exercitationem illum a iste tempora accusantium.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Placeat accusantium, quia cumque sapiente cum laboriosam 
                suscipit. Facere porro nam modi officiis fugit, labore 
                possimus optio vel qui, laborum error reiciendis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus soluta, dignissimos ab neque voluptas tempora 
                quas quod dolores eos nobis aut hic officia obcaecati. 
                Illo ex perferendis vero optio quod?
                Lorem ipsum dolor sit, amet consectetur adipisicing
             elit. Deleniti necessitatibus enim perspiciatis 
             exercitationem quo, hic sequi placeat, error 
             modi tenetur ex, architecto laboriosam laborum! 
             Deserunt aliquid praesentium ad qui dicta.
             Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ducimus ut harum nulla maiores dignissimos 
              quibusdam quod fugit rerum? Vero deserunt quis 
              iure necessitatibus corrupti earum voluptas culpa 
              recusandae saepe voluptatibus.            Lorem ipsum dolor sit, amet consectetur adipisicing
             elit. Deleniti necessitatibus enim perspiciatis 
             exercitationem quo, hic sequi placeat, error 
             modi tenetur ex, architecto laboriosam laborum! 
             Deserunt aliquid praesentium ad qui dicta.
             Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ducimus ut harum nulla maiores dignissimos 
              quibusdam quod fugit rerum? Vero deserunt quis 
              iure necessitatibus corrupti earum voluptas culpa 
              recusandae saepe voluptatibus. iam amet quo earum accusamus. Iusto, similique.
                Soluta reiciendis voluptatibus similique esse porro.
                adipisicing elit. Itaque quas amet imped
                it harum cupiditate, perspiciatis optio c
                onsectetur distinctio maxime. Tempore quasi 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eius ducimus, nostrum ex 
                quaerat, sequi et provident tempora culpa, vitae molestias
                repellendus obcaecati accusamus beatae iusto ea nam.
                Inventore, quis nesciunt.neque optio quas expedita enim, 
                quidem nulla similique accusamus! Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Itaque quas amet imped
                it harum cupiditate, perspiciatis optio c
                onsectetur distinctio maxime. Tempore quasi 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eius ducimus, nostrum ex 
                quaerat, sequi et provident tempora culpa, vitae molestias
                repellendus obcaecati accusamus beatae iusto ea nam.
                Inventore, quis nesciunt.neque optio quas expedita enim, 
                quidem nulla similique accusamus! Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Itaque quas amet imped
                it harum cupiditate, perspiciatis optio c
                onsectetur distinctio maxime. Tempore quasi 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eius ducimus, nostrum ex 
                quaerat, sequi et provident tempora culpa, vitae molestias
                repellendus obcaecati accusamus beatae iusto ea nam.
                Inventore, quis nesciunt.neque optio quas expedita enim, 
                quidem nulla similique accusamus!Lorem ipsum dolor sit amet consectetur 
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Harum, voluptate accusantium
                aspernatur illum quas expedita enim? Reprehenderit
                aperiam amet quo earum accusamus. Iusto, similique.
                Soluta reiciendis voluptatibus similique esse porro.
                adipisicing elit. Itaque quas amet imped
                it harum cupiditate, perspiciatis optio c
                onsectetur distinctio maxime. Tempore quasi 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eius duc</p>
              <button onClick={goToPage} id='support'>
                Support
              </button>
        </div>
    )
}
function OngoingBoth() {
    return(
        <div className='ongoin-text-projects'>
            <Ongoing/>
            <OngoingText/>
        </div>
    )
}

function HostingAbout() {
    return(
        <div className='about'>
            <h1 className='about-h1'>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur 
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Harum, voluptate accusantium
                aspernatur illum quas expedita enim? Reprehenderit
                aperiam amet quo earum accusamus. Iusto, similique.
                Soluta reiciendis voluptatibus similique esse porro.
                adipisicing elit. Itaque quas amet imped
                it harum cupiditate, perspiciatis optio c
                onsectetur distinctio maxime. Tempore quasi 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eius ducimus, nostrum ex 
                quaerat, sequi et provident tempora culpa, vitae molestias
                repellendus obcaecati accusamus beatae iusto ea nam.
                Inventore, quis nesciunt.neque optio quas expedita enim, 
                quidem nulla similique accusamus! Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Itaque quas amet imped
                it harum cupiditate, perspiciatis optio c
                onsectetur distinctio maxime. Tempore quasi 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eius ducimus, nostrum ex 
                quaerat, sequi et provident tempora culpa, vitae molestias
                repellendus obcaecati accusamus beatae iusto ea nam.
                Inventore, quis nesciunt.neque optio quas expedita enim, 
                quidem nulla similique accusamus! Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Itaque quas amet imped
                it harum cupiditate, perspiciatis optio c
                onsectetur distinctio maxime. Tempore quasi 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eius ducimus, nostrum ex 
                quaerat, sequi et provident tempora culpa, vitae molestias
                repellendus obcaecati accusamus beatae iusto ea nam.
                Inventore, quis nesciunt.neque optio quas expedita enim, 
                quidem nulla similique accusamus!Lorem ipsum dolor sit amet consectetur 
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Harum, voluptate accusantium
                aspernatur illum quas expedita enim? Reprehenderit
                aperiam amet quo earum accusamus. Iusto, similique.
                Soluta reiciendis voluptatibus similique esse porro.
                adipisicing elit. Itaque quas amet imped
                it harum cupiditate, perspiciatis optio c
                onsectetur distinctio maxime. Tempore quasi 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eius ducimus, nostrum ex 
                quaerat, sequi et provident tempora culpa, vitae molestias
                repellendus obcaecati accusamus beatae iusto ea nam.
                Inventore, quis nesciunt.neque optio quas expedita enim, 
                quidem nulla similique accusamus! Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Itaque quas amet imped
                it harum cupiditate, perspiciatis optio c
                onsectetur distinctio maxime. Tempore quasi 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eius ducimus, nostrum ex 
                quaerat, sequi et provident tempora culpa, vitae molestias
                repellendus obcaecati accusamus beatae iusto ea nam.
                Inventore, quis nesciunt.neque optio quas expedita enim, 
                quidem nulla similique accusamus! Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Itaque quas amet imped
                it harum cupiditate, perspiciatis optio c
                onsectetur distinctio maxime. Tempore quasi 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eius ducimus, nostrum ex 
                quaerat, sequi et provident tempora culpa, vitae molestias
                repellendus obcaecati accusamus beatae iusto ea nam.
                Inventore, quis nesciunt.neque optio quas expedita enim, 
                quidem nulla similique accusamus! Lorem ipsum dolor sit amet consectetur 
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Harum, voluptate accusantium
                aspernatur illum quas expedita enim? Reprehenderit
                aperiam amet quo earum accusamus. Iusto, similique.
                Soluta reiciendis voluptatibus similique esse porro.
                adipisicing elit. Itaque quas amet imped
                it harum cupiditate, perspiciatis optio c
                onsectetur distinctio maxime. Tempore quasi 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eius ducimus, nostrum ex 
                quaerat, sequi et provident tempora culpa, vitae molestias
                repellendus obcaecati accusamus beatae iusto ea nam.
                Inventore, quis nesciunt.neque optio quas expedita enim, 
                quidem nulla similique accusamus! Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Itaque quas amet imped
                it harum cupiditate, perspiciatis optio c
                onsectetur distinctio maxime. Tempore quasi 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eius ducimus, nostrum ex 
                quaerat, sequi et provident tempora culpa, vitae molestias
                repellendus obcaecati accusamus beatae iusto ea nam.
                Inventore, quis nesciunt.neque optio quas expedita enim, 
                quidem nulla similique accusamus! Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Itaque quas amet imped
                it harum cupiditate, perspiciatis optio c
                onsectetur distinctio maxime. Tempore quasi 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eius ducimus, nostrum ex 
                quaerat, sequi et provident tempora culpa, vitae molestias
                repellendus obcaecati accusamus beatae iusto ea nam.
                Inventore, quis nesciunt.neque optio quas expedita enim, 
                quidem nulla similique accusamus! 
                </p>
                <Both />
                <History/>
              
        </div>
    )
}

export default function About() {
  return (
    <div className='about-page'>
        <HostingAbout/>
        <AdStaff/>
        <OngoingBoth/>

    </div>
  )
}

