import React, { useEffect } from 'react'

import Slideshow from '../components/Slideshow'
import Card from '../components/Card';



const images = import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', { eager: true });


const imageUrls = Object.keys(images).reduce((acc, path) => {
  acc[path.replace('../assets/', '')] = images[path].default; // Store URL with filename as key
  return acc;
}, {});

const Landing = () => {

    const houseImg = [
        imageUrls['William year9 house captain badge.png'],
        imageUrls['William year6 House Captain.jpg'],
        imageUrls['William year6 House Captain Badge.png'],

    ]

    const studentImg = [
        imageUrls['William year8 photo on school  bill board-3.jpeg'],
        imageUrls['year9 student.jpeg'],
    ]

    const ukmtImg = [
        imageUrls['William year8 UKMT.jpg'],
        imageUrls['William year9 UKMT sliver.jpg'],
    ]

    const ict = [
        imageUrls['William year9 language week research.jpg']
    ]

    const mun = [
        imageUrls['William year8 MUN-1.jpeg']
    ]

    const communication = [
        imageUrls['William year8 creativity.jpg']
    ]

    const video = [
        imageUrls['video.png']
    ]

    const intergrity = [
        imageUrls['William year6 integrity.jpg']
    ]

    const citizenshipAward = [
        imageUrls['William year5 global citizen ship.jpg']
    ]

    const ib = [
        imageUrls['William grade 9IB Learner Profile.jpg']
    ]

        

    

  return (
    <div>
        <h1 className="heading">
            <span className="short-head">This is why</span><br></br> 
            I make a good Shackleton
            <br></br>
            <span className="highlight"> House Captain</span>
            
        </h1>

        {/* <nav>
            <ul>
                <li><a href="#">Video</a></li>
                <li><a href="https://william-nais.github.io/">Supporting Material</a></li>
            </ul>
        </nav> */}

      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "0 auto" }}>
        <div style={{ width: "40vw", textAlign: "justify" }}>
          <p>
            “I believe I would make an excellent House Captain due to my leadership experience. I served as House Captain for 4 consecutive years at Nord Anglia International School (DCIS) in Singapore, leading the Ubin house through various events such as the basketball challenge and swimming gala, while also working to enhance the value of house points. You can read more about these achievements on my website: https://william.nais.fun. Additionally, as a Student Council member and part of the Digital Culture & Learning Committee for 2 years, I supported a school-wide software transition by creating tutorials and live demonstrations.
          </p>
          <p>
            Furthermore, I am committed to dedicating my energy, enthusiasm, and dedication to enriching the school community. I aspire to inspire house spirit and make our house a source of pride for everyone.”
          </p>
        </div>
      </div>

        <div className='reasons reason-1'>
            <h1>Reason 1: My Leadership Experience</h1>
            <div className="card-grid-double">
                <div className='visit-card'>
                    <Slideshow images={houseImg}/>
                    <Card
                        heading="House Captain"
                        content={
                            <div>
                                I was a House Captain of Ubin for 4 consecutive years, 
                                in that time, I led my house through basketball challenges,
                                swimming galas, and sought to give house points more value.
                            </div>
                        }
                    />
                </div>

                <div className='visit-card'>
                    <Slideshow images={studentImg}/>
                    <Card
                        heading="Student Council"
                        content={
                            <div>
                                I was in Student Council in DCIS for 2 consecutive years. Some of 
                                the projects I was part of were: creating tutorials for the entire
                                school during a software transition and speaking to parents about
                                the school's various plateforms such as Pupil Portal.
                            </div>
                        }
                    />
                </div>
            </div>
        </div>

        <div className='reasons reason-2'>
            <h1>Reason 2: My Knowledge</h1>
            <div className="card-grid-double">
                <div className='visit-card'>
                    <Slideshow images={ukmtImg}/>
                    <Card
                        heading="UKMT Maths Challenge"
                        content={
                            <div>
                                I entered the UKMT Junior Maths Competition in 2023 &
                                the UKMT Intermediate Maths Competition in 2024 and got
                                Gold & Silver respectively. This demonstrates my logical thinking
                                skills as well as my problem solving skills.
                            </div>
                        }
                    />
                </div>

                <div className='visit-card'>
                    <Slideshow images={ict}/>
                    <Card
                        heading="Languages Week"
                        content={
                            <div>
                                During languages week I surprised everyone by creating a website like 
                                <a href="https://william.dcis.space/languages-week" target="_blank"> here </a>
                                reflecting on the historical impacts on the French language. This demonstrates 
                                my online research skills & programming skills.
                            </div>
                        }
                    />
                </div>

                <div className='visit-card'>
                    <Slideshow images={mun}/>
                    <Card
                        heading="Model United Nations"
                        content={
                            <div>
                                I joined MUN in 2022 and held a leading role with my allies by representing
                                the United States of America. We debated on topics such as inflation and the Tawain
                                Strait Conflict.
                            </div>
                        }
                    />
                </div>

                <div className='visit-card'>
                    <Slideshow images={video}/>
                    <Card
                        heading="Presentation & Video Editing"
                        content={
                            <div>
                                I made several videos (view them 
                                <a href="https://www.youtube.com/watch?v=512VtXIJmjc" target="_blank"> here</a>)
                                for applications of student councils,
                                house captains, and even Class President of my Politics class!
                                Because of them, my editing & presentation skills, I got in!
                            </div>
                        }
                    />
                </div>
            </div>
        </div>

        <div className='reasons reason-3'>
            <h1>Reason 3: My Communication Skills</h1>
            <div className='card-grid-double'>
                <div className='visit-card'>
                    <Slideshow images={communication}/>
                    <Card
                        heading="Creativity Award"
                        content={
                            <div>
                                In 2023, I got the Creativity Award for my active discussions
                                in class using kindness & humor to engage my peers. This shows
                                that I am good at bringing people together, a trait which a house captain
                                requires.
                            </div>
                        }
                    />
                </div>

                <div className='visit-card'>
                    <Slideshow images={intergrity}/>
                    <Card
                        heading="Intergrity Award"
                        content={
                            <div>
                                In 2020, I was honored with the Integrity Award, which recognized my commitment 
                                to honesty and ethical leadership. This experience reinforced the importance of 
                                leading by example and building trust within a team.
                            </div>
                        }
                    />
                </div>

                <div className='visit-card'>
                    <Slideshow images={citizenshipAward}/>
                    <Card
                        heading="Global Citizenship Award"
                        content={
                            <div>
                                In 2020, I received the Global Citizenship Award for my commitment to 
                                embracing diversity and fostering inclusivity. This recognition deepened 
                                my understanding of different perspectives and cultures.
                            </div>
                        }
                    />
                </div>

                <div className='visit-card'>
                    <Slideshow images={ib}/>
                    <Card
                        heading="IB Learner Profile Award"
                        content={
                            <div>
                                In 2024, I was honored with the IB Learner Profile Award for being open-minded, 
                                a trait that has allowed me to appreciate diverse perspectives and ideas. 
                                This emphasizes the importance of 
                                understanding and valuing others’ viewpoints.
                            </div>
                        }
                    />
                </div>
            </div>
        </div>

        <h3>
            Thank you for your consideration! :)
            <br/>
            - William Xu
        </h3>
    </div>
  )
}

export default Landing
