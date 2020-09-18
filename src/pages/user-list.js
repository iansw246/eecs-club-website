import React from "react";
import styles from "./user-list.module.css";
import Container from "../components/testContainer";
import TestContainer from "../components/testContainer";

console.log(styles);

const User = (props) => (
	<div className={styles.user}>
		<img src={props.avatar} className={styles.avatar} alt=""></img>
		<div className={styles.description}>
			<h2 className={styles.username}>{props.username}</h2>
			<p className={styles.excerpt}>{props.excerpt}</p>
		</div>
	</div>
);

export default function UserList() {
	return (
		<TestContainer>
			<h1>User list tutorial page</h1>
			<User
				username="Jane Doe"
				avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
				excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
			/>
			<User
				username="Bob Smith"
				avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
				excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
			/>
		</TestContainer>
	);
}
