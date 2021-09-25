package model;

import excepcionCustom.SueldoException;

public class Desarrollador extends AbstractEmpleado {
	
	private static final int PLUS = 5;

	public Desarrollador(String nombre, String dni, String localidad, double sueldo) throws SueldoException {
		super(nombre, dni, localidad, sueldo);
	}

	@Override
	public void actualizarSueldo() {
		super.sueldo = this.sueldo*PLUS;
		
	}

}
