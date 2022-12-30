import React, {useEffect} from 'react'
import a from './images/1.png';
export default function Contact() {

	useEffect(() => {
		setThemeColor("#000"); //on mount: set theme to black
		setLowergridmenu([]);
	},[]);

  return (
    <>
    <div className='contact'>
    <h1 className="font-contact">
      Contact Us
    </h1>
    <div>
    <ul className="grid cs-style-4">
				<li>
					<figure>
						<div><img src={a} alt="img05" /></div>
						<figcaption>
							<h3>Safari</h3>
							<span>Jacob Cummings</span>
							
						</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<div><img src={a} alt="img05" /></div>
						<figcaption>
							<h3>Game Center</h3>
							<span>Jacob Cummings</span>
							
						</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<div><img src={a} alt="img05" /></div>
						<figcaption>
							<h3>Music</h3>
							<span>Jacob Cummings</span>
							
						</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<div><img src={a} alt="img05" /></div>
						<figcaption>
							<h3>Settings</h3>
							<span>Jacob Cummings</span>
							
						</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<div><img src={a} alt="img05" /></div>
						<figcaption>
							<h3>Camera</h3>
							<span>Jacob Cummings</span>
							
						</figcaption>
					</figure>
				</li>
				<li>
					<figure>
						<div><img src={a} alt="img05" /></div>
						<figcaption>
							<h3>Phone</h3>
							<span>Jacob Cummings</span>
							
						</figcaption>
					</figure>
				</li>
			</ul>
    </div>

    </div>
    </>
  )
}
