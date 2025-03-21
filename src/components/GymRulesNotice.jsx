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
  { title: "MFC 직원 요청에 협조", img: "/images/gym_rule_10.png" }
];

export default function GymRulesNotice() {
  return (
    <div style={{ width: "90%", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "2rem" }}>
        MFC 헬스장 이용수칙
      </h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1.5rem", rowGap: "2rem" }}>
        {rules.map((rule, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              paddingBottom: "1rem"
            }}
          >
            <img
              src={rule.img}
              alt={rule.title}
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                maxHeight: "400px"
              }}
            />
            <div
              style={{
                width: "100%",
                background: "rgba(0, 0, 0, 0.6)",
                padding: "1rem",
                textAlign: "center",
                color: "white"
              }}
            >
              <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                RULE {index + 1}
              </div>
              <div style={{ fontSize: "1.5rem", fontWeight: "600" }}>{rule.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}