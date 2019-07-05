import React from "react";

export default React.forwardRef(function TextInput(props, ref) {
  return <input {...props} ref={ref} />;
});
