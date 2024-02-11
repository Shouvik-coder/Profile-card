import React, { useState } from 'react';
import './App.css';

// const skills = [
// ];
function App() {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<div className="card">
			{isOpen && <Avatar />}
			<div className="data">
				<Intro />
				<SkillList />
				<br />
				<button
					style={{
						backgroundColor: isOpen ? 'red' : 'green',
					}}
					className="skill"
					onClick={() => {
						setIsOpen((s) => !s);
					}}
				>
					<b>{isOpen ? 'Hide🔒' : 'Show🔓'}</b>
				</button>
			</div>
		</div>
	);
}

function Avatar() {
	return (
		<img
			className="avatar"
			src="https://media.licdn.com/dms/image/D4D03AQF9jFNXiYbkCg/profile-displayphoto-shrink_800_800/0/1689098707154?e=2147483647&v=beta&t=B-EeAtk6UxIrlEdZMD7b6i3P2FZvVpkLmgdPuaIkmHg"
		/>
	);
}

function Intro() {
	return (
		<div>
			<h1>Shouvik Kumar Chakraborty</h1>
			<p>Developer aspiring to be a good one</p>
		</div>
	);
}

function SkillList() {
	const [skills, setSkills] = useState(['HTML', 'CSS', 'JS']);
	let [textValue, setTextValue] = useState('');
	return (
		<>
			<input value={textValue} type="text" onChange={(e) => setTextValue(e.target.value)} />
			<br />
			<br />
			<button
				className="skill"
				style={{
					backgroundColor: 'lightgreen',
				}}
				onClick={() => {
					setSkills((s) => [...s, textValue]);
					setTextValue('');
				}}
			>
				<b>ADD SKILL</b>
			</button>
			<div className="skill-list">
				{skills.map((skill) => (
					<Skill skillName={skill} skillColor="yellow" key={skill} />
				))}
			</div>
		</>
	);
}

function Skill(props) {
	return (
		<div className="skill" style={{ backgroundColor: props.skillColor }}>
			{props.skillName}
		</div>
	);
}

export default App;
