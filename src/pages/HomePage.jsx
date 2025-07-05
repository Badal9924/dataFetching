import React, { useEffect } from "react";
import { fetchData, removeCard } from "../store/slice/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { RxCrossCircled } from "react-icons/rx";

function HomePage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.list);

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchData());
    }, 5000);
  }, [dispatch]);

  return (
    <div className="flex justify-center gap-[11px] flex-wrap min-h-[100vh] pt-3 pb-3">
      {data.length === 0 ? (
        <div className="flex justify-center items-center">
          <h1 className="text-4xl font-bold">LOADING...</h1>
        </div>
      ) : (
        ""
      )}
      {data.map((eachCard, index) => {
        return (
          <div
            key={index}
            className="max-w-[300px] border-2 border-solid pt-[33px] pl-[8px] pr-[8px] pb-[8px] rounded relative max-h-[400px]"
          >
            <h2 className="text-xl font-bold">{eachCard.title}</h2>
            <p>{eachCard.body}</p>
            <p
              onClick={() => {
                dispatch(removeCard(index));
              }}
              className="cursor-pointer absolute top-[5px] right-[5px]"
            >
              <RxCrossCircled size={35} />
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
