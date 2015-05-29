package com.brightinteractive.twosigma.form;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/getform")
@Produces(MediaType.APPLICATION_JSON)
public class GetFormResource {

    @GET
    public Form getForm() {
//      Form form = defaultForm();
      Form form = testForm();
      return form;
    }

    private Form testForm() {
      return new FormBuilder()
        .addText("What is your name?")
        .addInputText("name")
        .nextRow()
        .addEmpty()
        .addButton("pressMe", "Press me!")
        .build();
    }

    private Form defaultForm() {
      return new FormBuilder()
        .addText("First Name:")
        .addInputText("firstName")
        .addText("Last Name:")
        .addInputText("lastName")
        .addButton("submit", "Submit")
        .build();
    }
}
