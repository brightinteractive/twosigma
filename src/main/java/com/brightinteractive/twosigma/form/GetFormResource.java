package com.brightinteractive.twosigma.form;

import com.brightinteractive.twosigma.model.FormStore;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/getform")
@Produces(MediaType.APPLICATION_JSON)
public class GetFormResource {

    @GET
    public Form getForm() {
      return FormStore.getForm();
    }
}
