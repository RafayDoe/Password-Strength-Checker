import { useState } from "react";

function Generator() {
  const [pass, setPass] = useState("");
  const [strength, setStrength] = useState("");
  const [color, setColor] = useState("");

  function hasNums(value) {
    return /[0-9]/.test(value);
  }

  function hasUpperChars(value) {
    return /[A-Z]/.test(value);
  }

  function hasSpecialChars(value) {
    return /[^0-9A-Za-z]/.test(value);
  }

  function strengthCheck(value) {
    if (
      value.length >= 8 &&
      hasNums(value) &&
      hasUpperChars(value) &&
      hasSpecialChars(value)
    ) {
      setColor("green");
      setStrength("Strong");
    } else if (
      value.length >= 4 &&
      hasNums(value) &&
      hasUpperChars(value) &&
      hasSpecialChars(value)
    ) {
      setColor("orange");
      setStrength("Medium");
    } else {
      setColor("red");
      setStrength("Weak");
    }
  }

  const percent =
    strength === "Weak"
      ? 33
      : strength === "Medium"
        ? 66
        : strength === "Strong"
          ? 100
          : 0;

  return (
    <>
      <input
        type="password"
        value={pass}
        placeholder="eg: johndoe123"
        onChange={(e) => {
          const value = e.target.value;
          setPass(value);
          strengthCheck(value);
        }}
      />

      <ul>
        <li style={{ color: pass.length >= 8 ? "green" : "red" }}>
          Must contain 8+ characters
        </li>
        <li style={{ color: hasUpperChars(pass) ? "green" : "red" }}>
          Must include a capital letter
        </li>
        <li style={{ color: hasNums(pass) ? "green" : "red" }}>
          Must include a number
        </li>
        <li style={{ color: hasSpecialChars(pass) ? "green" : "red" }}>
          Must include a special character
        </li>
      </ul>

      <p style={{ color: pass ? color : "grey" }}>
        {pass ? strength : "Empty"}
      </p>

      <div
        style={{
          backgroundColor: "grey",
          width: "50%",
          height: "10px",
          borderRadius: "8px",
          overflow: "hidden",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            width: pass ? percent + "%" : "0%",
            backgroundColor: color,
            height: "100%",
            transition: "width 0.3s ease",
          }}
        />
      </div>
    </>
  );
}

export default Generator;
