package com.brightinteractive.twosigma.app;

import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;

import com.brightinteractive.twosigma.form.GetFormResource;
import com.brightinteractive.twosigma.form.SubmitFormResource;

public class TwoSigmaApplication extends Application<TwoSigmaConfiguration> {

  public static void main(String[] args) throws Exception {
    new TwoSigmaApplication().run(args);
  }

  @Override
  public String getName() {
    return "two-sigma";
  }

  @Override
  public void initialize(Bootstrap<TwoSigmaConfiguration> bootstrap) {
    bootstrap.addBundle(new AssetsBundle("/assets", "/", "index.html"));
  }

  @Override
  public void run(TwoSigmaConfiguration configuration, Environment environment) {
    final GetFormResource getForm = new GetFormResource();
    final SubmitFormResource submitForm = new SubmitFormResource();
    environment.jersey().register(getForm);
    environment.jersey().register(submitForm);
  }

}
