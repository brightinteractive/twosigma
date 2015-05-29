package com.brightinteractive.twosigma.form;

import java.util.ArrayList;
import java.util.List;

public class FormBuilder {

  private int rowIndex;

  private List<List<FormElement>> elements;

  public FormBuilder() {
    elements = new ArrayList<>();
    elements.add(new ArrayList<>());
    rowIndex = 0;
  }

  public FormBuilder addText(String content) {
    List<FormElement> row = elements.get(rowIndex);
    row.add(new Text(content));
    return this;
  }

  public FormBuilder addInputText(String name) {
    List<FormElement> row = elements.get(rowIndex);
    row.add(new InputText(name));
    return this;
  }

  public FormBuilder addButton(String name, String label, Runnable behaviour) {
    List<FormElement> row = elements.get(rowIndex);
    row.add(new Button(name, label, behaviour));
    return this;
  }

  public FormBuilder addEmpty() {
    List<FormElement> row = elements.get(rowIndex);
    row.add(null);
    return this;
  }

  public FormBuilder nextRow() {
    elements.add(new ArrayList<>());
    rowIndex += 1;
    return this;
  }

  public Form build() {
    return new Form(elements);
  }

}
