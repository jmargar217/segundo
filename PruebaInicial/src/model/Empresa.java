package model;

import java.util.ArrayList;
import java.util.List;

public class Empresa {
	private String nombre;
	private List<AbstractEmpleado>empleados;
	
	public Empresa(String nombre) {
		super();
		this.empleados = new ArrayList<AbstractEmpleado>();
		this.nombre = nombre;
	}
	
	
	// Al utilizar ArrayList debo comprobar que no se meten valores repetidos
	public void addEmpleado(AbstractEmpleado emp) {
		if(!this.empleados.contains(emp)) {
			this.empleados.add(emp);
		}
	}

	public String getNombre() {
		return nombre;
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		
		for (AbstractEmpleado emp : empleados) {
			sb.append(emp.getNombre()+"\n");
		}
		
		return sb.toString();
	}
	

}
