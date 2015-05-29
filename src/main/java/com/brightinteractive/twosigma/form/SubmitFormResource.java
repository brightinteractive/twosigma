package com.brightinteractive.twosigma.form;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.codahale.metrics.annotation.Timed;

@Path("/submitform")
@Produces(MediaType.APPLICATION_JSON)
public class SubmitFormResource {

    public SubmitFormResource(String template, String defaultName) {
    }

    @POST
    @Timed
    public void submitForm(FormBuilder form) {
    }
}