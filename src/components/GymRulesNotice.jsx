const rules = [
    { title: "운동 후 기구 정리하기", img: "/images/gym_rule_01.png" },
    { title: "실내 운동화 착용 필수", img: "/images/gym_rule_02.png" },
    { title: "운동 후 기구 닦기", img: "/images/gym_rule_03.png" },
    { title: "정숙 유지", img: "/images/gym_rule_04.png" },
    { title: "이용 시간 준수", img: "/images/gym_rule_05.png" },
    { title: "개인 사물은 락커에 보관하기", img: "/images/gym_rule_06.png" },
    { title: "음식물 반입 금지", img: "/images/gym_rule_07.png" },
    { title: "기구 독점 금지", img: "/images/gym_rule_08.png" },
    { title: "안전 수칙 준수", img: "/images/gym_rule_09.png" },
    { title: "트레이너 지시에 협조하기", img: "/images/gym_rule_10.png" }
  ];
  
  export default function GymRulesNotice() {
    return (
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "2rem" }}>
        <h1 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "1rem" }}>
          MFC 헬스장 이용수칙
        </h1>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          {rules.map((rule, index) => (
            <div key={index} style={{ border: "1px solid #ddd", borderRadius: "12px", overflow: "hidden" }}>
              <img src={rule.img} alt={rule.title} style={{ width: "100%", height: "auto" }} />
              <div style={{ padding: "1rem", textAlign: "center" }}>
                <strong>RULE {index + 1}</strong>
                <p>{rule.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  