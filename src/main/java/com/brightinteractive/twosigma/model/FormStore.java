package com.brightinteractive.twosigma.model;

/*
 * Copyright 2015 Bright Interactive, All Rights Reserved.
 */

import com.brightinteractive.twosigma.form.Form;
import com.brightinteractive.twosigma.form.FormBuilder;

public class FormStore {
  public static Form getForm() {
    // this would get the form from some kind of data store 'in real life'
    return new FormBuilder()
      .addText("First Name:")
      .addInputText("firstName")
      .nextRow()
      .addText("Last Name:")
      .addInputText("lastName")
      .nextRow()
      .addEmpty()
      .addButton("submit", "Submit", () -> System.out.println("Submit button pressed"))
      .addButton("other", "Other", () -> System.out.println("Other button pressed"))
      .build();
  }
}
