import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getDisplay,
  del,
  enterDigit,
  enterDecimal,
  add,
  subtract,
  multiply,
  divide,
  equals,
  clear,
  selectDisplay,
} from "../feature/calculatorSlice";

function CalView() {
  const dispatch = useDispatch();
  const displayValue = useSelector(selectDisplay);

  return (
    //#region another way of send data to store
    // <div id="wrapper">
    //   <h1 id="display">{displayValue}</h1>
    //   <div id="numpad">
    //     <button id="one" onClick={() => dispatch(enterDigit("1"))}>
    //       1
    //     </button>
    //     <button id="two" onClick={() => dispatch(enterDigit("2"))}>
    //       2
    //     </button>
    //     <button id="three" onClick={() => dispatch(enterDigit("3"))}>
    //       3
    //     </button>
    //     <button id="plus" onClick={() => dispatch(add())}>
    //       +
    //     </button>
    //     <button id="four" onClick={() => dispatch(enterDigit("4"))}>
    //       4
    //     </button>
    //     <button id="five" onClick={() => dispatch(enterDigit("5"))}>
    //       5
    //     </button>
    //     <button id="six" onClick={() => dispatch(enterDigit("6"))}>
    //       6
    //     </button>
    //     <button id="minus" onClick={() => dispatch(subtract())}>
    //       -
    //     </button>
    //     <button id="seven" onClick={() => dispatch(enterDigit("7"))}>
    //       7
    //     </button>
    //     <button id="eight" onClick={() => dispatch(enterDigit("8"))}>
    //       8
    //     </button>
    //     <button id="nine" onClick={() => dispatch(enterDigit("9"))}>
    //       9
    //     </button>
    //     <button id="multiply" onClick={() => dispatch(multiply())}>
    //       *
    //     </button>
    //     <button id="decimal" onClick={() => dispatch(enterDecimal())}>
    //       .
    //     </button>
    //     <button id="zero" onClick={() => dispatch(enterDigit("0"))}>
    //       0
    //     </button>
    //     <button id="clear" onClick={() => dispatch(clear())}>
    //       clear
    //     </button>
    //     <button id="divide" onClick={() => dispatch(divide())}>
    //       /
    //     </button>
    //   </div>
    //   <button id="equals" onClick={() => dispatch(equals())}>
    //     =
    //   </button>
    // </div>
    //#endregion
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={displayValue} readOnly />
          </div>
          <div>
            <input type="button" value="AC" onClick={() => dispatch(clear())} />
            <input type="button" value="DE" onClick={() => dispatch(del())} />
            <input
              type="button"
              value="."
              onClick={() => dispatch(enterDecimal())}
            />
            <input type="button" value="/" onClick={() => dispatch(divide())} />
          </div>
          <div>
            <input
              type="button"
              value="7"
              onClick={() => dispatch(enterDigit("7"))}
            />
            <input
              type="button"
              value="8"
              onClick={() => dispatch(enterDigit("8"))}
            />
            <input
              type="button"
              value="9"
              onClick={() => dispatch(enterDigit("9"))}
            />
            <input
              type="button"
              value="*"
              onClick={() => dispatch(multiply())}
            />
          </div>
          <div>
            <input
              type="button"
              value="4"
              onClick={() => dispatch(enterDigit("4"))}
            />
            <input
              type="button"
              value="5"
              onClick={() => dispatch(enterDigit("5"))}
            />
            <input
              type="button"
              value="6"
              onClick={() => dispatch(enterDigit("6"))}
            />
            <input type="button" value="+" onClick={() => dispatch(add())} />
          </div>
          <div>
            <input
              type="button"
              value="1"
              onClick={() => dispatch(enterDigit("1"))}
            />
            <input
              type="button"
              value="2"
              onClick={() => dispatch(enterDigit("2"))}
            />
            <input
              type="button"
              value="3"
              onClick={() => dispatch(enterDigit("3"))}
            />
            <input
              type="button"
              value="-"
              onClick={() => dispatch(subtract())}
            />
          </div>
          <div>
            <input
              type="button"
              value="00"
              onClick={() => dispatch(enterDigit("00"))}
            />
            <input
              type="button"
              value="0"
              onClick={() => dispatch(enterDigit("0"))}
            />
            <input
              type="button"
              value="="
              className="equal"
              onClick={() => dispatch(equals())}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CalView;
