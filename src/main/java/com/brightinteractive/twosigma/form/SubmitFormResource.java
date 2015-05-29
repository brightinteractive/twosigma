package com.brightinteractive.twosigma.form;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;

import com.brightinteractive.twosigma.form.FormData.FormField;

@Path("/submitform")
public class SubmitFormResource {
  
  @POST
  @Consumes(MediaType.APPLICATION_JSON)
  public void submitForm(FormData data) {
    for (FormField field : data.getFields()) {
      printField(field);
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
