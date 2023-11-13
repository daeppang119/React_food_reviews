import React from "react";

export default function List({ list, setList }) {
  let today = new Date(); // today 객체에 Date()의 결과를 넣어줬다
  let time = {
    year: today.getFullYear(), //현재 년도
    month: today.getMonth() + 1, // 현재 월
    date: today.getDate(), // 현제 날짜
    hours: today.getHours(), //현재 시간
    minutes: today.getMinutes(), //현재 분
  };

  let amPm = time.date < 12 ? "AM" : "PM";

  let timeString = `${time.year}.${time.month}.${time.date} ${amPm}${time.hours}:${time.minutes}`;

  return (
    <div>
      <ul>
        {list.map((element) => {
          return (
            <li>
              <div>
                <img src="" />
              </div>
              <div>
                <p>{element.nickName}</p>
                <p>{timeString}</p>
                <p>{element.contents}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
