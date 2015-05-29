package com.brightinteractive.twosigma.form;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Button implements FormElement {

  private String name;
  private String label;
  
  public Button(String label) {
    this.label = label;
  }
  
  public Button(String name, String label) {
    this.name = name;
    this.label = label;
  }
  
  @JsonProperty
  public String getName() {
    return name;
  }
  
  @JsonProperty
  public String getLabel() {
    return label;
  }
  
  @Override
  public String getType() {
    return "Button";
  }
}
