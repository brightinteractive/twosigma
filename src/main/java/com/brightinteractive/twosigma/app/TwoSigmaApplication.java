package com.brightinteractive.twosigma.app;

import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;

import com.brightinteractive.twosigma.form.GetFormResource;

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
    environment.jersey().register(getForm);
  }

}
