import '../App.css'
import team from '../assets/team-members.json';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';

function AboutPage () {

	return (

		<div className="team-container">

		{team.map(member => {

			return (
				
				<div className="team-card" key={member.id}>

					<p>{member.name}</p>

					<div>
					<a href={member.github}><img className="site-icon" src={githubIcon} /></a>
					<a href={member.linkedin}><img className="site-icon" src={linkedinIcon} /></a>
					</div>

				</div>
				

				)
		})}

		</div>

	)

}

export default AboutPage;