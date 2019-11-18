import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Simran Kaur</h2>
            <h4 style={{color: 'grey'}}>Software Engineer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>265 Cassandra Tower Unit 524, North York</p>
            <h5>Phone</h5>
            <p>(519) 965-8615</p>
            <h5>Email</h5>
            <p>simran221133@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear="September 2017"
              endYear="December 2018"
              schoolName="University of Windsor, Canada"
              schoolDescription="Application using Django Framework
              Developed an application using Django framework and also created databases using SQL for all the necessary users and admin.

              Kungfu Club
              Developed a Database Project with an Interactive Interface, which stores, manipulates and retrieves Student’s data of a Kungfu club using SQL for database and Java for front- end.

              Configured Chef Set-up for Artifactory
              Configure Chef-Server, Workstation, Client and Chef-Management Console for automating the installations and configurations of Artifactory Primary and Secondary Nodes with GUI. Also imported artifacts

              Bootstrap VM on AWS
              Configuring AMI with desired configurations, automating installations and configuration of various services like RabbitMQ, Bugzilla, SQL Server, MSMQ, etc "
               />

               <Education
                 startYear="August 2012"
                 endYear="May 2016"
                 schoolName="Guru Tegh Bahadur Institute of Technology, India"
                 schoolDescription="Filters using MATLAB 
                 Compare popular machine learning algorithm like Bayesian, K-NN, Decision tree and logistic Regression using MATLAB. "
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
