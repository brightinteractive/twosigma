package com.brightinteractive.twosigma.form;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;

import com.brightinteractive.twosigma.form.FormData.FormField;
import com.brightinteractive.twosigma.model.FormStore;

import java.util.List;

@Path("/submitform")
public class SubmitFormResource {
  
  @POST
  @Consumes(MediaType.APPLICATION_JSON)
  public void submitForm(FormData data) {
    System.out.println("Button pressed: " + data.getButtonPressed());
    for (FormField field : data.getFields()) {
      printField(field);
    }
    
    Form form = FormStore.getForm();
    for (List<FormElement> elementRow : form.getElements()) {
      for (FormElement element : elementRow) {
        if (element != null &&
            element.getName() != null &&
            element.getName().equals(data.getButtonPressed())) {
          element.execute();
        }
      }
    }
  }

  private void printField(FormField field) {
    String output = new StringBuilder()
      .append(field.getName())
      .append(": ")
      .append(field.getValue())
      .toString();
    System.out.println(output);
  }
}
