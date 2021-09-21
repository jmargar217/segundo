package excepcionCustom;

public class SueldoException extends Exception {
	
	public SueldoException() {
		super("El sueldo debe ser mayor de 0");
	}

}
