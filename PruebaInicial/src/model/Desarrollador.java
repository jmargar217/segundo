package model;

import excepcionCustom.SueldoException;

public class Desarrollador extends AbstractEmpleado {
	
	private static final int PLUS = 5;
	private int yearTrabajados;

	public Desarrollador(String nombre, String dni, String localidad, double sueldo) throws SueldoException {
		super(nombre, dni, localidad, sueldo);
		this.yearTrabajados = yearTrabajados;
	}
	
	

	public int getYearTrabajados() {
		return yearTrabajados;
	}

	@Override
	public void actualizarSueldo() {
		double incremento = (super.sueldo*yearTrabajados)/PLUS;
		super.sueldo = this.sueldo+incremento;
		
	}


	@Override
	public String toString() {
		return super.toString()+", Años trabajados: ";
	}
	
	

}
