import React from 'react'
import './Practice6.css'

export default function () {
    const students = [
        { id: 1, name: "Franz", age: 20, course: "BSCS", pass: true },
        { id: 2, name: "awd", age: 10, course: "BSCS", pass: false },
        { id: 3, name: "dwwdw", age: 230, course: "BSIT", pass: true },
        { id: 4, name: "dwdwwwwww", age: 26, course: "BSCS", pass: false },
    ]

    return (
        <>
            {students.map((student)=> <StudentCard key={student.id} studentInfo={student}/>)}
        </>
    )
}

function StudentCard({ studentInfo }) {
    return (
        <div className="studentCard">
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
