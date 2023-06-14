import React, { useEffect, useState } from "react";
import questionImg from "../../../assets/images/imiu-question.svg";
import { Button, InputNumber, Popconfirm, message } from "antd";
import "./styles.scss";
import { useGetQuestionQuery } from "../../../store/services/questionApi";
import {
  useCreateAnswerMutation,
  useGetAnswerQuery,
} from "../../../store/services/customerAnswerApi";
import { useSelector } from "react-redux";

const Question = () => {
  const uId = useSelector((store) => store.auth.accountId);

  const questions = useGetQuestionQuery()?.data?.data;
  const [answer, setAnswer] = useState([]);
  const userAns = useGetAnswerQuery(uId)?.data?.data;
  const [createAnswer, { data, isLoading, error }] = useCreateAnswerMutation();

  useEffect(() => {
    setAnswer(userAns);
  }, [questions]);
  console.log(answer);
  const confirm = (e) => {
    createAnswer({ answer, id: uId });
  };
  const cancel = (e) => {};
  const handleAnswer = (a, q) => {
    const answerList = {
      value: 0,
      answerId: a.id,
      accountId: uId,
    };
    if (answer.some((element) => element.answerId == answerList.answerId)) {
      let newarray = answer?.filter(
        (element) => element.answerId != answerList.answerId
      );

      setAnswer(newarray);
    } else {
      setAnswer((current) => [...current, answerList]);
    }
  };
  const handleAnswerOnce = (a, q) => {
    const answerList = {
      value: 1,
      answerId: a.id,
      accountId: uId,
    };
    if (answer.some((element) => element.value == answerList.value)) {
      let newarray = answer?.filter(
        (element) => element.value != answerList.value
      );

      setAnswer(newarray);
      setAnswer((current) => [...current, answerList]);
    } else {
      setAnswer((current) => [...current, answerList]);
    }
  };
  const handleChange = (event, id) => {
    const answerList = {
      value: event,
      answerId: id,
      accountId: uId,
    };
    if (answer.some((element) => element.answerId == answerList.answerId)) {
      let newarray = answer?.filter(
        (element) => element.answerId != answerList.answerId
      );

      setAnswer(newarray);
      setAnswer((current) => [...current, answerList]);
    } else {
      setAnswer((current) => [...current, answerList]);
    }
  };
  const initValue = (id) => {
    if (answer?.some((element) => element.answerId == id)) {
      console.log(answer.find((element) => element.answerId == id).value);
      return answer.find((element) => element.answerId == id).value;
    }
  };
  return (
    <div className="question">
      <div className="question__wrapper">
        <h2>
          Cho <span className="green">i.Miu</span> biết một số thông tin của bạn
          nhé
        </h2>

        {questions?.map((item) => {
          return (
            <div key={item.index} className="question__item">
              <h5>{item.content}</h5>
              <div className="question__item__answer">
                {(() => {
                  switch (item.index) {
                    case 0:
                      return item.answers.map((answers) => {
                        return (
                          <Button
                            type={
                              answer?.some(
                                (element) => element.answerId == answers.id
                              )
                                ? "primary"
                                : "default"
                            }
                            key={answers.content}
                            className="question__item__answer__item circle"
                            onClick={() => handleAnswerOnce(answers, item)}
                          >
                            {answers.content}
                          </Button>
                        );
                      });
                    case 4:
                      return (
                        <>
                          <InputNumber
                            min={500}
                            max={700}
                            value={initValue(
                              item.answers.find((item) => item.content == "Min")
                                .id
                            )}
                            onChange={(value) =>
                              handleChange(
                                value,
                                item.answers.find(
                                  (item) => item.content == "Min"
                                ).id
                              )
                            }
                          />
                          -
                          <InputNumber
                            min={700}
                            max={1200}
                            value={initValue(
                              item.answers.find((item) => item.content == "Max")
                                .id
                            )}
                            onChange={(value) =>
                              handleChange(
                                value,
                                item.answers.find(
                                  (item) => item.content == "Max"
                                ).id
                              )
                            }
                          />
                          <h5>calories / người</h5>
                        </>
                      );
                    default:
                      return item.answers.map((answers) => {
                        return (
                          <Button
                            type={
                              answer?.some(
                                (element) => element.answerId == answers.id
                              )
                                ? "primary"
                                : "default"
                            }
                            key={answers.content}
                            className="question__item__answer__item "
                            onClick={() => handleAnswer(answers, item)}
                          >
                            {answers.content}
                          </Button>
                        );
                      });
                  }
                })()}
              </div>
            </div>
          );
        })}

        <div className="question__item">
          <i style={{ fontSize: "12px" }}>
            Theo khuyến nghị của các chuyên gia dinh dưỡng, cơ thể của người
            trưởng thành cần được cung cấp từ <b>2.000 - 2.300</b> calo mỗi
            ngày. Có thể thấy, với thói quen ăn 3 bữa mỗi ngày của đại đa số
            người Việt thì mỗi bữa ăn cơ thể cần khoảng <b> 667 - 767</b> calo.
          </i>
          <Popconfirm
            title="Bạn có chắc chắn với câu trả lời của mình?"
            description="Đừng lo, bạn vẫn có thể thay đổi câu trả lời trong phần Quản lý tài khoản."
            onConfirm={confirm}
            onCancel={cancel}
            okText="Tôi chắc chắn"
            cancelText="Chưa"
            placement="topRight"
          >
            <Button type="primary">Tiến tới thực đơn của bạn ngay thôi</Button>
          </Popconfirm>
        </div>
      </div>
      <div className="question__img">
        <div className="img-container">
          <img src={questionImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Question;
