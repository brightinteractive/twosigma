package com.brightinteractive.twosigma.form;

import com.fasterxml.jackson.annotation.JsonProperty;

public class InputText implements FormElement {

  private String name;
  
  public InputText(String name) {
    this.name = name;
  }
  
  @JsonProperty
  public String getName() {
    return name;
  }
  
  @Override
  public String getType() {
    return "InputText";
  }

}
