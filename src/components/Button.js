import React from "react";
import PropTypes from "prop-types";

const Button = function ({
  children,
  primary,
  secondary,
  warning,
  danger,
  rounded,
  outline,
  ...rest
}) {
  let baseClass = function () {
    if (primary) {
      return "bg-blue-400 border-blue-500 text-white";
    } else if (secondary) {
      return "bg-gray-400 border-gray-500 text-white";
    } else if (warning) {
      return "bg-orange-400 border-orange-500 text-white";
    } else if (danger) {
      return "bg-red-400 border-red-500 text-white";
    }
  };

  let isRounded = function () {
    if (rounded) {
      return " rounded";
    } else {
      return "";
    }
  };
  let isOutline = function () {
    if (outline) {
      if (primary) {
        return " outline bg-white text-blue-500 border-none";
      } else if (secondary) {
        return " outline bg-white text-gray-500 border-none";
      } else if (warning) {
        return " outline bg-white text-orange-500 border-none";
      } else if (danger) {
        return " outline bg-white text-red-500 border-none";
      } else {
        return " outline bg-white text-gray-500 border-none";
      }
    } else {
      return "";
    }
  };

  let classType = `p-2 m-1 ${baseClass()} border${isRounded()}${isOutline()}`;

  return (
    <button {...rest} className={classType}>
      {children}
    </button>
  );
};

Button.propTypes = {
  checkTypeOfButton: ({ primary, secondary, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error("You inserted types that conflict each other");
    }
  },
};

export default Button;
