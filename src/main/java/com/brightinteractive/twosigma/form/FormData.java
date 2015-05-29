package com.brightinteractive.twosigma.form;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Currently accepts data of the form
 * {
      "fields": [
          {
              "name": "first",
              "value": "a"
          },
          {
              "name": "last",
              "value": "b"
          }
      ]
  }
 * @author lloyd
 *
 */
public class FormData {
  private String buttonPressed;
  private List<FormField> fields;
  
  public FormData() {
  }

  public FormData(List<FormField> fields) {
    this.fields = fields;
  }

  @JsonProperty
  public String getButtonPressed() {
    return buttonPressed;
  }

  public void setButtonPressed(String buttonPressed) {
    this.buttonPressed = buttonPressed;
  }

  public void setFields(List<FormField> fields) {
    this.fields = fields;
  }

  @JsonProperty
  public List<FormField> getFields() {
    return fields;
  }

  public static class FormField {
    private String name;
    private String value;
    
    public FormField() {
    }

    public FormField(String name, String value) {
      this.name = name;
      this.value = value;
    }

    @JsonProperty
    public String getName() {
      return name;
    }

    @JsonProperty
    public String getValue() {
      return value;
    }
  }
}
