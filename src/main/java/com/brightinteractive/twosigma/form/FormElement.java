package com.brightinteractive.twosigma.form;

import com.fasterxml.jackson.annotation.JsonProperty;

public interface FormElement {
  
  @JsonProperty
  String getType();

  String getName();

  void execute();
}
