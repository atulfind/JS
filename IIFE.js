const title = ((action, type, subType) => {
    if (action === "create") {
      return `Add ${_.startCase(type)}`;
    } 
      return `Edit ${_.startCase(type)}`; // this is change || sujeet change || yes || oyeee
    
  })(action, "Practical Exam", subType);

