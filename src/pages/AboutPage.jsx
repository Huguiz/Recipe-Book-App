import '../App.css'
import team from '../assets/team-members.json';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';

function AboutPage () {
	return (
<<<<<<< HEAD

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

=======
		<div className="AboutPage">
		<p>Info about Alastair and Hugo will go here.</p>
>>>>>>> 35414125a880be0ea347c68a7f34de96f73659b7
		</div>
	)
}
export default AboutPage;