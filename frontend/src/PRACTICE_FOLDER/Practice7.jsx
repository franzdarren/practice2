import React from 'react'
import './Practice6.css'

export default function () {
    const students = [
        { id: 1, name: "Franz", age: 20, course: "BSCS", pass: true, sex: "M"},
        { id: 2, name: "Darren", age: 33, course: "BSCS", pass: false, sex: "F" },
        { id: 3, name: "Znarf", age: 24, course: "BSIT", pass: true, sex: "F"},
        { id: 4, name: "Drarden", age: 26, course: "BSCS", pass: false, sex: "M" },
    ]

    return (
        <>
            {students.map((student)=> <StudentCard key={student.id} studentInfo={student}/>)}
        </>
    )
}

function StudentCard({ studentInfo }) {
    return (
        <div className="studentCard" style={{
            backgroundColor: studentInfo.sex === "M" ? "lightblue" : "pink"
        }}>
            <h1 className="studentName">{studentInfo.name}</h1>
            <span className='studentAge'>{studentInfo.age}</span>
            <span className='studentCourse'>{studentInfo.course}</span>
            {
                studentInfo.pass ? (
                    <p>PASS</p>
                ) : (<p>FAILED</p>)
            }
        </div>
    )
}
