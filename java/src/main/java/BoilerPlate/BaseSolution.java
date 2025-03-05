package BoilerPlate;

/**
 * BaseSolution provides a template for all solution classes.
 */
public abstract class BaseSolution {
    public abstract void solve();
    
    public void printSolutionName() {
        System.out.println("Executing: " + this.getClass().getSimpleName());
    }
}
