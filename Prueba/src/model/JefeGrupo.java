package model;

import excepcionCustom.SueldoException;

public class JefeGrupo extends AbstractEmpleado {
	
	private static final int PLUS = 15;

	public JefeGrupo(String nombre, String dni, String localidad, double sueldo) throws SueldoException {
		super(nombre, dni, localidad, sueldo);
		
	}

	@Override
	public void actualizarSueldo() {
		super.sueldo = this.sueldo*PLUS;
		
	}

}
