package com.brightinteractive.twosigma.form;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Text implements FormElement {

  private String label;

  public Text(String label) {
    this.label = label;
  }

  @JsonProperty
  public String getLabel() {
    return label;
  }

  @Override
  public String getType() {
    return "Text";
  }

  @Override
  public void execute() {
    // only Buttons can have behaviour at the moment
  }

  @Override
  public String getName() {
    return null;
  }
}
