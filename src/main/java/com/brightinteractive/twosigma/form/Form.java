package com.brightinteractive.twosigma.form;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Form implements FormElement {
  
  @JsonProperty
  private List<List<FormElement>> elements;

  public Form(List<List<FormElement>> elements) {
    this.elements = elements;
  }

  @Override
  public String getType() {
    return "Form";
  }

}
