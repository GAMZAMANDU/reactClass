import React from 'react'
import './Scientists.css'

const people = [
  {
    id: 0,
    name: '크레올라 캐서린 존슨',
    profession: '수학자',
    accomplishment: '우주비행 계산',
    imageId: 'MK3eW3A',
  },
  {
    id: 1,
    name: '마리오 호세 몰리나-파스켈 헨리케스',
    profession: '화학자',
    accomplishment: '북극 오존 홀 발견',
    imageId: 'mynHUSa',
  },
  {
    id: 2,
    name: '모하메드 압두스 살람',
    profession: '물리학자',
    accomplishment: '전자기학 이론',
    imageId: 'bE7W1ji',
  },
  {
    id: 3,
    name: '퍼시 레이본 줄리언',
    profession: '화학자',
    accomplishment: '코르티손 약물, 스테로이드 및 피임약 개발',
    imageId: 'IOjWm71',
  },
  {
    id: 4,
    name: '수브라흐마니안 찬드라세카르',
    profession: '천체물리학자',
    accomplishment: '백색 왜성의 질량 계산',
    imageId: 'lrWQx8l',
  },
];

const Scientists = () => {
  return (
    <>
      <h1>Scientists</h1>
      <h2>화학자들</h2>
      <PeopleList people={people.filter((person) => person.profession === '화학자')} />
      <h2>기타</h2>
      <PeopleList people={people.filter((person) => person.profession !== '화학자')} />
    </>
  )
}

export default Scientists

const Card = ({name,profession,accomplishment,imageId}) => {
  return (
    <li>
      <img src={"https://i.imgur.com/"+imageId} alt="" />
      <div className='card'>
        <p><b>{name}:</b> {profession} known for {accomplishment}</p>
      </div>
    </li>
  )
}


const PeopleList = ({people}) => {
  return (
    <ul>
      {
        people.map((person) => (
          <Card
            key={person.id}
            name={person.name}
            profession={person.profession}
            accomplishment={person.accomplishment}
            imageId={person.imageId}
          />
        ))
      }
    </ul>
  )
}