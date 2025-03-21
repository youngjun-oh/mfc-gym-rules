import { useState } from "react";

const rules = [
  { title: "운동 후 기구 정리하기", img: "/images/gym_rule_01.png" },
  { title: "실내 운동화 착용 필수", img: "/images/gym_rule_02.png" },
  { title: "운동 후 기구 닦기", img: "/images/gym_rule_03.png" },
  { title: "정숙 유지", img: "/images/gym_rule_04.png" },
  { title: "이용 시간 준수", img: "/images/gym_rule_05.png" },
  { title: "개인 물품 락커 보관", img: "/images/gym_rule_06.png" },
  { title: "음식물 반입 금지", img: "/images/gym_rule_07.png" },
  { title: "기구 독점 금지", img: "/images/gym_rule_08.png" },
  { title: "안전 수칙 준수", img: "/images/gym_rule_09.png" },
  { title: "트레이너 요청에 협조", img: "/images/gym_rule_10.png" }
];

export default function GymRulesNotice() {
  const [modalRule, setModalRule] = useState(null);

  return (
    <div style={{ width: "90%", margin: "0 auto", padding: "2rem", backgroundColor: "#f4f4f4", textAlign: "center" }}>
      <h1 style={{ 
        fontSize: "3.5rem", 
        fontWeight: "bold", 
        marginBottom: "2rem", 
        color: "#ffffff", 
        textShadow: "3px 3px 6px rgba(0, 0, 0, 0.4)",
        background: "linear-gradient(135deg, #00B4ED 30%, #0077B6 100%)",
        padding: "1.5rem 3rem",
        borderRadius: "16px",
        display: "inline-block",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
      }}>
        HL만도 MFC 헬스장 이용수칙
      </h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1.5rem", rowGap: "2rem", justifyContent: "center" }}>
        {rules.map((rule, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              height: "500px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
              backgroundColor: "#ffffff",
              boxShadow: "0 6px 24px rgba(0,0,0,0.2)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer"
            }}
            onClick={() => setModalRule(rule)}
          >
            <img
              src={rule.img}
              alt={rule.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "20px 20px 0 0"
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "0",
                width: "100%",
                background: "rgba(0, 0, 0, 0.6)",
                padding: "1rem",
                textAlign: "center",
                color: "white",
                fontSize: "1.6rem",
                fontWeight: "bold"
              }}
            >
              <div>RULE {index + 1}</div>
              <div style={{ fontSize: "1.4rem", fontWeight: "600", marginTop: "0.5rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{rule.title}</div>
            </div>
          </div>
        ))}
      </div>
      {modalRule && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          background: "rgba(0, 0, 0, 0.8)", display: "flex",
          alignItems: "center", justifyContent: "center",
          flexDirection: "column",
          zIndex: 1000
        }} onClick={() => setModalRule(null)}>
          <img src={modalRule.img} alt={modalRule.title} style={{ maxWidth: "90%", maxHeight: "80%", borderRadius: "10px", marginBottom: "1rem" }} />
          <h2 style={{ color: "white", fontSize: "2rem", fontWeight: "bold" }}>{modalRule.title}</h2>
        </div>
      )}
    </div>
  );
}