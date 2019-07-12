import React from "react";

export default React.forwardRef(function Button(props, ref) {
  return <button {...props} ref={ref} />;
});
